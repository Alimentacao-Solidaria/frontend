export default interface Produtos {
  id: number,
  nomeProduto: string,
  descricaoProduto: string,
  preco: number,
  quantidade: number,
  foto: string
  categoria: {
    id: number
  }
}
