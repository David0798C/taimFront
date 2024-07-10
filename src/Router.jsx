import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import EditUser from "./pages/EditUser";
import Create from "./pages/Create";
import Register from "./pages/Register";
import Ofertas from "./pages/Ofertas";
import PrivateRoute from "./PrivateRoute"

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<PrivateRoute component={UserPage} />} />
        <Route path="/edit" element={<PrivateRoute component={EditUser} />} />
        <Route path="/create" element={<PrivateRoute component={Create} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ofertas" element={<PrivateRoute component={Ofertas} />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
