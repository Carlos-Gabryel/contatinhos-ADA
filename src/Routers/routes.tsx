import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login/index";
import {Register} from "@/pages/Register/index"; 
import Lista from "@/pages/Lista";
import { PATHS } from "./paths";


const Router = () => {
    return (
      <BrowserRouter>
      <Routes>
          <Route path={PATHS.login} element={<Login />} />
          <Route path={PATHS.register} element={<Register />} />
          <Route path={PATHS.contato} element={<Lista />} />
        </Routes>
      </BrowserRouter>
    );
}

export {Router};
