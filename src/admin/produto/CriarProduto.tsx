import React, { useState } from 'react'
import Produtos from '../../model/Produtos'

function CriarProduto() {

    const{produto, setProduto} = useState <Produtos>({  
        id: 0,
        nomeProduto: '',
        descricaoProduto:'',
        preco: 0,
        quantidade: 0,
        foto: '',
        categoria: null})
        
  return (
    <div>
      
    </div>
  )
}

export default CriarProduto
