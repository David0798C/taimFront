import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import UserPage from "./Pages/UserPage";
import Create from "./Pages/Create";

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={<UserPage />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
