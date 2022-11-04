export interface ICard {
  dados: {
    id: number,
    titulo: string,
    receita: string,
    topico: {
      id: number,
      item: string
    }[]
  }
}
