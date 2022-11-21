import { ITopicData } from "interfaces/topic.interface";
import api from "services/api";

class TopicData {
  index() {
    return api.get<ITopicData[]>('/topics')
  }
  store(data: ITopicData) {
    return api.post(`/topics`, data)
  }
  show(id: number) {
    return api.get<ITopicData>(`/topics/${id}`)
  }
  update(id: number, data: ITopicData) {
    return api.put(`/topics/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/topics/${id}`)
  }
}

export default new TopicData()