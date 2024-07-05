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
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ofertas" element={<Ofertas />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
