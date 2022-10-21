export interface ICard {
  dados: {
    id: number,
    nome: string,
    receita: string,
    topico: {
      id: number,
      item: string
    }[]
  }
}
