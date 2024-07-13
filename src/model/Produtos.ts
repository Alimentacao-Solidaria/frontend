export default interface Produtos {
  qtd: number

  id: number,
  nomeProduto: string,
  descricaoProduto: string,
  preco: number,
  quantidade: number,
  foto: string

  categoria: {
    id: number
  }
  qts?:  number
}
