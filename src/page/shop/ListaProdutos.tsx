import React, { useContext, useEffect, useState } from "react";
import Produtos from '../../model/Produtos';
import { buscar } from "../../services/Service";
import ProdutosCard from "./ProdutosCard";
import { toastAlerta } from "../../utils/ToastAlert";




function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produtos[]>([]);


     async function buscarprodutos() {
       try {
         await buscar("/produtos/todosprodutos", setProdutos, {});
       } catch (error) {
         toastAlerta("Deu ruim","erro");
         console.log(error);
       }
     }

    useEffect(() => {
      buscarprodutos();
    }, [produtos.length]);
    return (
      <div className=" grid  sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-1  ">
        {produtos.map((produtos) => (
          <ProdutosCard key={produtos.id} produto={produtos} />
        ))}
      </div>
    );
}

export default ListaProdutos;
