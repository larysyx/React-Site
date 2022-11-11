import { FormEvent, useEffect, useState } from "react";
import * as S from "./styles";
import { LoadingComponent, ButtonComponent } from "components";
import { FcDatabase, FcUndo } from "react-icons/fc";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiReceitas} from "services/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IReceitaData, IReceitaForm } from "interfaces/receitas.interface";
import { IErrorResponse } from "interfaces/user.interface";

const ReceitaStore = () => {
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
        await apiReceitas.update(Number(id), formData);
        toast.success("Rceita alterada com sucesso!");
      } else {
        await apiReceitas.store(formData);
        toast.success("Receita cadastrada com sucesso!");
      }
      navigate('/adm/Receita')
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
            topic: response.data.topico?.map((i) => i.id)
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
          <S.Section>
            <form method="POST" onSubmit={handleSubmit}>
              <Link to="/adm/Receita">
                <FcUndo /> Voltar
              </Link>
              <div>
                <label htmlFor="titulo">Título: </label>
                <input type="text" id="title" placeholder="Escreva um título" required
                  onChange={(e) => handleChange({ titulo: e.target.value })}
                  value={formData?.titulo}
                />
              </div>
              <div>
                <label htmlFor="Receita">Receita: </label>
                <textarea id="Receita" placeholder="Escreva uma receita" required
                  onChange={(e) => handleChange({ receita: e.target.value })}
                  value={formData?.receita}
                />
              </div>
              <div>
              </div>
              <ButtonComponent bgColor="add" type="submit">
                Enviar <FcDatabase />
              </ButtonComponent>
            </form>
          </S.Section>
        </>
      )}
    </>
  );
};

export default ReceitaStore;