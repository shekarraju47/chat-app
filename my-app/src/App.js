import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import SignUp from "./components/register/SignUp";
import Login from "./components/login/Login";
import Protected from "./protectedRoute/Protected";
import About from "./components/about/About";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Protected />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/login" Component={Login} />
        <Route path="/signUp" Component={SignUp} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
