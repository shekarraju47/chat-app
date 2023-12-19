import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
// import Header from "./components/header/Header";
// import SignUp from "./components/register/SignUp";
// import Login from "./components/login/Login";
// import Protected from "./protectedRoute/Protected";
// import About from "./components/about/About";
// import Header from "./components/header/Header";

const App = () => {
  return (
    <Profile />
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<Protected />}>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //     </Route>
    //     <Route path="/login" Component={Login} />
    //     <Route path="/signUp" Component={SignUp} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
