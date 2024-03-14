import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login/index";
import {Register} from "@/pages/Register/index"; 
import Lista from "@/pages/Lista";

const Router = () => {
    return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register/index.tsx" element={<Register />} />
          <Route path="/lista" element={<Lista />} />
        </Routes>
      </BrowserRouter>
    );
};

export {Router};
