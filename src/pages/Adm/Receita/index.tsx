import { useCallback, useEffect, useState } from "react";
import { ButtonComponent } from "components";
import * as S from "./styles";
import { apiReceitas } from "services/data";
import { IReceitaData } from "interfaces/receitas.interface";
import { LoadingComponent } from "components";
import { FcAddDatabase } from "react-icons/fc";
import { BsPencilSquare, BsTrash2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";
import Receita from "services/data/Receita";

const AdmReceita = () => {
  const [receitas, setReceitas] = useState<IReceitaData[]>();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    const response = await apiReceitas.index();
    setReceitas(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = useCallback(
    async (id: number) => {
      confirmAlert({
        title: "Atenção",
        message: "Tem certeza que deseja apagar o item selecionado?",
        buttons: [
          {
            label: "SIM",
            onClick: async () => {
              setIsLoading(true);
              await apiReceitas.destroy(id);
              toast.success("Receita removida com sucesso!");
              fetchData();
            },
          },
          {
            label: "Não",
            onClick: () => console.log("não"),
          },
        ],
      });
    },
    [fetchData]
  );

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <S.Section>
            <div>
              <ButtonComponent
                bgColor="add"
                type="button"
                onClick={() => navigate("/adm/Receita/0")}
              >
                <FcAddDatabase />
              </ButtonComponent>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Receita</th>
                  <th>Tópico</th>
                  <th>Editar</th>
                  <th>Remover</th>
                </tr>
              </thead>
              <tbody>
                {receitas &&
                  receitas.map((item) => (
                    <tr key={item.id}>
                      <td>{item.titulo}</td>
                      <td>{item.receita}</td>
                      <td>{item.topico?.map((i) => `${i.item} `)}</td>
                      <td>
                        <ButtonComponent
                          type="button"
                          bgColor="edit"
                          onClick={() => navigate(`/adm/Receita/${item.id}`)}
                        >
                          <BsPencilSquare />
                        </ButtonComponent>
                      </td>
                      <td>
                        <ButtonComponent
                          type="button"
                          bgColor="remove"
                          onClick={() => item.id && handleDelete(item.id)}
                        >
                          <BsTrash2 />
                        </ButtonComponent>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </S.Section>
        </>
      )}
    </>
  );
};

export default AdmReceita;