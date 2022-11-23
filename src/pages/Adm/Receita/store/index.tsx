import { FormEvent, useEffect, useState } from "react";
import * as S from "./styles";
import { LoadingComponent, ButtonComponent } from "components";
import { FcUndo } from "react-icons/fc";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiReceitas} from "services/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IReceitaData, IReceitaForm } from "interfaces/receitas.interface";
import { IErrorResponse } from "interfaces/user.interface";
import { AiOutlineSend } from "react-icons/ai";

const ReceitaStore = () => {
  const [isLoading, setIsLoading] = useState(true);
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
        toast.success("Receita alterada com sucesso!");
      } else {
        await apiReceitas.store(formData);
        toast.success("Receita cadastrada com sucesso!");
      }
      navigate('/adm/receitas')
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
              <Link to="/adm/receitas">
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
                <label htmlFor="Tipo">Tipo: </label>
                <textarea id="Tipo" placeholder="Escreva o tipo da receita" required
                  onChange={(e) => handleChange({ tipo: e.target.value })}
                  value={formData?.tipo}
                />
              </div>
              <ButtonComponent bgColor="add" type="submit">
                Enviar <AiOutlineSend />
              </ButtonComponent>
            </form>
          </S.Main>
        </>
      )}
    </>
  );
};

export default ReceitaStore;