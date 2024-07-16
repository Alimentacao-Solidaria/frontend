import { Link } from "react-router-dom";
import Produtos from "../../../model/Produtos";

interface ProdutosCardProps {
  produto: Produtos;
}

function CardProdutosAdm({ produto }: ProdutosCardProps) {
  return (
    <div className="bg-white mt-6 ">
      <div className="mx-auto max-w-2xl  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div>
          <div
            key={produto.id}
            className="group relative shadow-lg max-w-xs mx-auto rounded-md"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                alt=""
                src={produto.foto}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 p-4 text-center uppercase">
              <h3>
                <a>
                  <span
                    aria-hidden="true"
                    className="inset-0 text-lg text-black-700"
                  />
                  <span className="uppercase font-bold">
                    {produto.nomeProduto}
                  </span>
                </a>
              </h3>
            </div>
            <div>
              <p className="text-xl  text-gray-900 pl-6 pb-9 font-bold">
                R${produto.preco}
              </p>
              <div>
                <Link
                  to={`/produtos/editarProduto/${produto.id}`}
                  className="w-full text-white bg-[#0EA5E9] hover:bg-indigo-800 flex items-center justify-center py-2"
                >
                  <button>Editar</button>
                </Link>
                <Link
                  to={`/produtos/deletarProduto/${produto.id}`}
                  className="text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
                >
                  <button>Deletar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProdutosAdm;
