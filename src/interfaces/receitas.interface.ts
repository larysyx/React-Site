export interface IReceitaData {
  id: number,
  titulo: string,
  receita: string,
  topico: {
    tipo: string
  }
}

export interface IReceitaForm {
  id?: number
  titulo?: string
  receita?: string
  created_at?: string
  topic?: number[] | undefined
}
