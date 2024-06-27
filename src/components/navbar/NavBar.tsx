import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img className="h-16 w-16 rounded-full" src={Logo} alt="Logo" />
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to='/home' className="text-gray-900 hover:text-gray-700">Home</Link>
            <Link to='/sobre' className="text-gray-900 hover:text-gray-700">Sobre</Link>
            <a href="/causes" className="text-gray-900 hover:text-gray-700">
              Equipe
            </a>
            <Link to='/login' className="text-gray-900 hover:text-gray-700">Login</Link>
            <a href="/events" className="text-gray-900 hover:text-gray-700">
              Cadastro
            </a>
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
