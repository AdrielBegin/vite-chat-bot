import React from "react";
import SideBar from "../component/sideBar";
import NavBar from "../component/navBar";
import Cards from "../component/cards";

export default function TelaPrincipal() {
  return (
    <div>
      <NavBar />
      <div className="flex w-full">
        <div className="flex h-screen">
          <SideBar />
        </div>
        <div className="flex w-[100%] justify-around p-[20px]">
          <Cards />
        </div>
      </div>
    </div>
  );
}
