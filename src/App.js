import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Verification from "./pages/Verification";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "./features/user/userSlice";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Report from "./pages/Report";
import Transaction from "./pages/Transaction";
import Setting from "./pages/Setting";
import EditProduct from "./pages/EditProduct";
import EditCategory from "./pages/EditCategory";

function App() {
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("user_token");
  const userGlobal = useSelector((state) => state.user.user);

  useEffect(() => {
    if (userToken) {
      dispatch(checkLogin(userToken));
    }
  });
  return (
    <div>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/verification/:token" element={<Verification />} />
      </Routes> */}
      {/* <div>
        <Navbar />
      </div> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/verification/:token" element={<Verification />} />

          <Route path="/product" element={<Product />} />
          <Route path="/category" element={<Category />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<Report />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
          <Route path="/editcategory/:id" element={<EditCategory />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
