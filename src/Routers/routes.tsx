import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login/index";
import {Register} from "@/pages/Register/index"; 

const Router = () => {
    return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register/index.tsx" element={<Register />} />        
        
        </Routes>       
      </BrowserRouter>
    );
};

export {Router};
