export interface IReceitaData {
  id: number,
  titulo: string,
  receita: string,
  topico: {
    item: string
    id: number
  }[]
}

export interface IReceitaForm {
  id?: number
  titulo?: string
  receita?: string
  created_at?: string
  topic?: number[] | undefined
}
