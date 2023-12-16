import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  if (false) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default Protected;
