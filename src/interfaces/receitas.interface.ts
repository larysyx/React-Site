export interface IReceitaData {
  id: number,
  titulo: string,
  receita: string,
  tipo: string
}

export interface IReceitaForm {
  id?: number
  titulo?: string
  receita?: string
  tipo?: string
  created_at?: string
}
