import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Footer() {
  const { usuario } = useContext(AuthContext);

  return (
    <footer className="bg-gradient-to-r from-white via-[#bce1ff] to-white">
      <div className="w-full px-2 py-1">
        <div className="flex flex-col items-center">
          <p className="text-sm text-slate-700 mt-1 font-semibold">
            Comida, amor & vida - AlimentAção Solidária | Copyright: 2024.
          </p>
          <p className="text-xs text-slate-700 mt-2 font-semibold">
            Acesse nosso GitHub
          </p>
          <div className="flex space-x-3 mt-2 text-gray-600">
            <a
              className="hover:opacity-75"
              href="https://github.com/Alimentacao-Solidaria/frontend"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <GithubLogo
                size={23}
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              />
            </a>
          </div>
          {usuario.token !== "" && (
            <div className="mt-1 w-full flex flex-col items-center text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-center">
                <div>
                  <Link to={"/categoria/cadastrarCategoria"}>
                    <button className="btn">Cadastrar Categoria</button>
                  </Link>
                </div>
                <div>
                  <Link to={"/categoria"}>
                    <button className="btn">Ver Todas as Categorias</button>
                  </Link>
                </div>
                <div>
                  <Link to={"/produtos/cadastrarProduto"}>
                    <button className="btn">
                      Cadastrar Produto (Somente Adm)
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to={"/produtos"}>
                    <button className="btn">
                      Editar Produtos (Somente Adm)
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
