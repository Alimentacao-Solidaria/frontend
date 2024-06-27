import Logo1 from "../assets/Comida_Amor__Vida_hands.png"

const Navbar = () => {
  return (
    <nav className="bg-white border-b shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img className="h-16 w-16 rounded-full" src={Logo1} alt="Logo" />
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="/" className="text-gray-900 hover:text-gray-700">
              Home
            </a>
            <a href="/about" className="text-gray-900 hover:text-gray-700">
              Sobre
            </a>
            <a href="/causes" className="text-gray-900 hover:text-gray-700">
              Equipe
            </a>
            <a href="/events" className="text-gray-900 hover:text-gray-700">
              Login
            </a>
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
