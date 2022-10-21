import { IReceitaData, IReceitaForm } from "interfaces/receitas.interface";
import api from "services/api";

class ReceitaData {
  index() {
    return api.get<IReceitaData[]>('/receita')
  }
  store(data: IReceitaForm) {
    return api.post(`/receita`, data)
  }
  show(id: number) {
    return api.get<IReceitaData>(`/receita/${id}`)
  }
  update(id: number, data: IReceitaForm) {
    return api.put(`/receita/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/receita/${id}`)
  }
}

export default new ReceitaData()