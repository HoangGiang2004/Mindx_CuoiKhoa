import { Route, Routes } from "react-router";
import "./App.css";
import ClientLayout from "./layouts/ClientLayout";
import Home from "./components/Home";
import Product from "./components/Product";
import AdminLayout from "./layouts/AdminLayout";
import DashBoard from "./components/admin/DashBoard";
import ListProduct from "./components/admin/ListProduct";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import User from "./components/admin/User";


function App() {

  return (
    <>

      <Routes>
        <Route element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<User />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="product" element={<ListProduct />} />
          <Route path="user" element={<User />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;