import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/test2.jpeg";
import { AuthContext } from "../../contexts/AutoContext";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/");
  }

  return (
    <nav className="bg-blue-400 text-white border-b shadow-md">
      <div className="px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-full mx-auto h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="h-10 w-10 rounded-full" src={Logo} alt="Logo" />
            <span className="text-lg font-bold">alimentação solidaria</span>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="hover:text-gray-700">
              Home
            </Link>

            <a href="/causes" className="hover:text-gray-700">
              Equipe
            </a>
            <Link to="/login" className="hover:text-gray-700">
              Login
            </Link>
            <a href="/cadastro" className="hover:text-gray-700">
              Cadastro
            </a>

            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
          <div>
            <a
              href="/donate"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400"
            >
              Doações
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
