import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Verification from "./pages/Verification";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "./features/user/userSlice";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/verification/:token" element={<Verification />} />
      </Routes>
    </div>
  );
}

export default App;
