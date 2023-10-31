import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

//Import dos componentes - PAGINAS

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={ <HomePage />} path={"/"} exact />
                <Route element={ <LoginPage />} path={"/login"} exact />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;