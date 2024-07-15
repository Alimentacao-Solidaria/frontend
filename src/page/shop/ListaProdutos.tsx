import React, {  useEffect, useState } from "react";
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
      <div className="flex flex-wrap justify-center gap-4 px-6 mt-10 mb-10">
        {produto.map((produtos) => (
          <ProdutosCard key={produtos.id} produto={produtos} />
        ))}
      </div>
    );
}

export default ListaProdutos;
