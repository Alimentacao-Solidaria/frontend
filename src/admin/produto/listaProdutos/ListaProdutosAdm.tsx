import React, { useContext, useEffect, useState } from "react";
import Produtos from '../../../model/Produtos';
import { buscar } from "../../../services/Service";
import CardProdutosAdm from "../cardProdutos/CardProdutosAdm";




function ListaProdutosAdm() {
    const [produtos, setProdutos] = useState<Produtos[]>([]);


     async function buscarprodutos() {
       try {
         await buscar("/produtos/todosprodutos", setProdutos, {});
       } catch (error) {
         alert("Deu ruim");
         console.log(error);
       }
     }

    useEffect(() => {
      buscarprodutos();
    }, [produtos.length]);
    return (
      <div className="grid  sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-1  ">
        {produtos.map((produtos) => (
          <CardProdutosAdm key={produtos.id} produto={produtos} />
        ))}
      </div>
    );
}

export default ListaProdutosAdm;
