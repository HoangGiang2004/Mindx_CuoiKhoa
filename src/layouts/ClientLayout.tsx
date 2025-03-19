import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const ClientLayout = () => {
  return (
    <>
      <Header/>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default ClientLayout;
