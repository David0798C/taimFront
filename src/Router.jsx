import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import Create from "./pages/Create";
import Register from "./pages/Register";
import Ofertas from "./pages/Ofertas";

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={<UserPage />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Ofertas" element={<Ofertas />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
