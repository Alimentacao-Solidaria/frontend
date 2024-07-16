import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo.jpeg";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
// import { ShoppingBagIcon } from "@heroicons/react/24/outline";
// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { toastAlerta } from "../../utils/ToastAlert";

const Navbar = () => {

  const navigate = useNavigate();
  const { usuario, handleLogout, circleColor } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "sucesso");
    navigate("/");
    setIsOpen(false);
  }

  let cartComponent;
const toggleDropdown = () => {
  setIsOpen(!isOpen);
};

  if (usuario.token !== "") {
    cartComponent = (
      <div className="flex justify-center text-center z-10">
        <div className="relative">
          <button
            className="block h-12 w-12 rounded-full overflow-hidden focus:outline-none text-center"
            onClick={toggleDropdown}
            style={{ backgroundColor: circleColor }}
          >
            <div className="h-full w-full flex items-center justify-center">
              {usuario.nome.charAt(0)}
            </div>
          </button>
          {isOpen && (
            <div className="absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl">
              <Link
                to="/cart"
                className="block text-md px-4 py-2 rounded text-blue-700 font-bold mt-4 lg:inline-block lg:mt-0"
                onClick={() => setIsOpen(false)}
              >
                Carrinho
              </Link>

              <div className="py-2">
                <hr />
              </div>

              <Link
                to="/login"
                onClick={logout}
                className="block text-md px-4 py-2 rounded text-blue-700 font-bold mt-4 lg:inline-block lg:mt-0"
              >
                Sair
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
  let loginCadastroComponent;

  if (usuario.token === "") {
    loginCadastroComponent = (
      <div>
        <Link
          to="/login"
          className="block text-md px-4 py-2 rounded text-[#0EA5E9] font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-[#0EA5E9]"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
        <Link
          to="/cadastro"
          className="block text-md px-4 py-2 rounded text-[#0EA5E9] font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-[#0EA5E9]"
          onClick={() => setIsOpen(false)}
        >
          Cadastro
        </Link>
      </div>);
  }
    return (
      <nav
        className={`flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 lg:shadow border-t-2 border-blue-700 z-40 ${
          isOpen ? "shadow" : ""
        }`}
      >
        <div className="flex items-center justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <img className="h-10 w-10 rounded-full" src={Logo} alt="Logo" />
            <Link to="/home">
              <span className="font-semibold text-xl tracking-tight ml-3 text-[#0EA5E9]">
                Alimentação Solidária
              </span>
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              id="nav"
              className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`menu w-full ${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto lg:px-3 px-8 justify-between`}
        >
          <div className="text-md font-bold text-blue-700 lg:flex-grow">
            <Link
              to="/"
              className="block text-md px-4 py-2 rounded text-[#0EA5E9] font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-[#0EA5E9]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/sobre"
              className="block text-md px-4 py-2 rounded text-[#0EA5E9] font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-[#0EA5E9]"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="/doacao"
              className="block text-md px-4 py-2 rounded text-[#0EA5E9] font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-[#0EA5E9]"
            >
              Doações
            </Link>
          </div>
          {loginCadastroComponent}
          {cartComponent}
        </div>
      </nav>
    );
};

export default Navbar;
