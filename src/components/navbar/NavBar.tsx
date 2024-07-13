import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/test2.jpeg";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { cadastrar } from '../../services/Service';

const Navbar = () => {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/");
    setIsOpen(false);
  }

  return (
    <nav
      className={`flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 lg:shadow border-t-2 border-blue-700 ${
        isOpen ? "shadow" : ""
      }`}
    >
      <div className="flex items-center justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <img className="h-10 w-10 rounded-full" src={Logo} alt="Logo" />
          <span className="font-semibold text-xl tracking-tight ml-2">
            Alimentação Solidária
          </span>
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
            className="block text-md px-4 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <a
            href="/causes"
            className="block text-md px-4 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Equipe
          </a>
          <Link
            to="/login"
            className="block text-md px-4 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <a
            href="/cadastro"
            className="block text-md px-4 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Cadastro
          </a>
          <Link
            to="/login"
            onClick={logout}
            className="block text-md px-4 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-blue-700"
          >
            Sair
          </Link>
        </div>
        <div>
          <a
            href="/doacao"
            className="block text-md px-4 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-blue-700"
          >
            Doações
          </a>
        </div>

        <a
          href="/cart"
          className="block text-md px-4 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-blue-700"
          onClick={() => setIsOpen(false)}
        >
          Cart
        </a>
        <a
          href="/overviews"
          className="block text-md px-4 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-blue-700"
          onClick={() => setIsOpen(false)}
        >
          overviews
        </a>
        <Link
          to="/categoria/cadastrarCategoria"
          className="block text-md px-4 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 lg:inline-block lg:mt-0 hover:bg-blue-700"

        >
          cccd
        </Link>

        <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar" />

      </div>
    </nav>
  );
};

export default Navbar;
