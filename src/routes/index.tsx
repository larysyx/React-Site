import { Routes, Route } from "react-router-dom";
import { CadastrarPage, HomePage, LayoutPage, LoginPage, AdmReceitaPage, AdmReceitaStorePage } from "pages";
import ProtectedRoute from "./ProtectedRoute";

const Rotas = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<CadastrarPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adm" element={<ProtectedRoute />}>
          <Route path="receitas" element={<AdmReceitaPage />} />
          <Route path="receitas/:id" element={<AdmReceitaStorePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Rotas;
