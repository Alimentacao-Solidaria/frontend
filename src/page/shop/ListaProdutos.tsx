import React, { useContext, useEffect, useState } from "react";
import Produtos from '../../model/Produtos';
import { buscar } from "../../services/Service";
import ProdutosCard from "./ProdutosCard";
import { toastAlerta } from "../../utils/ToastAlert";




function ListaProdutos() {
    const [produto, setProdutos] = useState<Produtos[]>([]);


     async function buscarProdutos() {
       try {
         await buscar("/produtos/todosprodutos", setProdutos, {});
       } catch (error) {
         toastAlerta("Deu ruim","erro");
         console.log(error);
       }
     }

    useEffect(() => {
      buscarProdutos();
    }, [produto.length]);
    return (
      <div className=" container mx-auto my-4 gap-3 grid  sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-1   ">
        {produto.map((produtos) => (
          <ProdutosCard key={produtos.id} produto={produtos} />
        ))}
      </div>
    );
}

export default ListaProdutos;
