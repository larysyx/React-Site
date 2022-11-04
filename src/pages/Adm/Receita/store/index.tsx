import { FormEvent, useEffect, useState } from "react";
import * as S from "./styles";
import { LoadingComponent, ButtonComponent } from "components";
import { FcDatabase, FcUndo } from "react-icons/fc";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiMessage, apiTopic } from "services/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IReceitaData } from "interfaces/topic.interface";
import { IErrorResponse } from "interfaces/user.interface";

const MessageStore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState<IReceitaData[]>()
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IReceitaForm>({
    titulo: '',
    receita: '',
  })
  const { id } = useParams<{ id: string }>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
        console.log(Number(id))
      if (Number(id) > 0) {
        await apiRceitas.update(Number(id), formData);
        toast.success("Mensagem alterada com sucesso!");
      } else {
        await apiRceitas.store(formData);
        toast.success("Mensagem cadastrada com sucesso!");
      }
      navigate('/adm/message')
    } catch (error) {
      const err = error as AxiosError<IErrorResponse>
      let messages = err.response?.data.message
      if (err.response?.data.errors) {
        messages = err.response?.data.errors?.map((i) => i.message)
          .reduce((total, cur) => `${total} ${cur}`)
      }
      toast.error(messages)
    }
  }

  async function handleChange(e: IReceitaForm) {
    setFormData((state: IReceitaForm | undefined) => ({ ...state, ...e }))
  }

  useEffect(() => {
    if (Number(id) > 0) {
      const fetchData = async (id: number) => {
        try {
          const response = await apiReceitas.show(id);
          setFormData({
            ...response.data,
            topic: response.data.messageTopic?.map((i) => i.id)
          });
        } catch (error) {
          console.log(error);
        }
      };
      fetchData(Number(id));
    }
    setIsLoading(false);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <S.Main>
            <form method="POST" onSubmit={handleSubmit}>
              <Link to="/adm/message">
                <FcUndo /> Voltar
              </Link>
              <div>
                <label htmlFor="title">Título: </label>
                <input type="text" id="title" placeholder="Escreva um título" required
                  onChange={(e) => handleChange({ title: e.target.value })}
                  value={formData?.title}
                />
              </div>
              <div>
                <label htmlFor="message">Mensagem: </label>
                <textarea id="message" placeholder="Escreva uma mensagem" required
                  onChange={(e) => handleChange({ message: e.target.value })}
                  value={formData?.message}
                />
              </div>
              <div>
                <label>Tópicos:</label>
                <div>
                  {topics && topics.map((i) => (
                    <div key={i.id}><>
                      <input type="checkbox" id={`topic${i.id}`} name="topics[]"
                        onChange={(e) => handleCheck(e.target.value)}
                        value={i.id}
                        checked={formData?.topic?.includes(Number(i.id))}
                      />
                      <label htmlFor={`topic${i.id}`}>{i.name}</label>
                    </></div>
                  ))}
                </div>
              </div>
              <ButtonComponent bgColor="add" type="submit">
                Enviar <FcDatabase />
              </ButtonComponent>
            </form>
          </S.Main>
        </>
      )}
    </>
  );
};

export default MessageStore;