export default interface Produtos {
  id: number,
  nomeProduto: string,
  descricaoProduto:string,
  preco: number,
  quantidade: 10,
  foto: string
  categoria: {
    id: number

  }
}
