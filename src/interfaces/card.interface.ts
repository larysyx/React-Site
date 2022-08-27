export interface ICard {
  dados: {
    id: number,
    nome: string,
    mensagem: string,
    topico: {
      id: number,
      item: string
    }[]
  }
}
