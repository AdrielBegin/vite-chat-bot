import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaPrincipa from "../pages/telaPrincipal"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaPrincipa/>}/>
      </Routes>
    </BrowserRouter>
  );
}
