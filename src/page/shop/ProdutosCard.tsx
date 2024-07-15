import React, { useContext, useState } from "react";
import Produtos from "../../model/Produtos";
import { Link } from "react-router-dom";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/ToastAlert";

interface ProdutosCardProps {
  produto: Produtos;
}

function Shop({ produto }: ProdutosCardProps) {
  // const [produtos, setProdutos] = useState<Produtos>({} as Produtos);
  const { adicionarItem } = useContext(CarrinhoContext);
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;
 const handleAddToCart = () => {
   if (token !== "") {
     adicionarItem(produto);
     toastAlerta("Produto adicionado ao carrinho!", "sucesso");
   } else {
     toastAlerta(
       "Precisar esta logado para poder adicionar itens no Carrinho",
       "erro"
     );

   }
 };


  return (
    <div
      className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 mt-6 mx-2"
      key={produto.id}
    >
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-64">
        <img
          className="object-cover w-full h-full"
          src={produto.foto}
          alt="product image"
        />
      </div>
      <div className="p-6 flex-1">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {produto.nomeProduto}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(produto.preco)}
          </p>
        </div>
        <p className=" font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 truncate line-clamp-2 text-wrap">
          {produto.descricaoProduto}
        </p>
      </div>
      <div className="p-6 pt-0 flex justify-center gap-3">
        <Link to={`/overviews/${produto.id}`}>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block bg-blue-700 text-white hover:bg-blue-800"
            type="button"
          >
            Ver Mais
          </button>
        </Link>

        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block bg-blue-700 text-white hover:bg-blue-800"
          type="button"
          onClick={handleAddToCart}
        >
          ADD CARRINHO
        </button>
      </div>
    </div>
  );
}

export default Shop;
