import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login/index";
import { Register } from "@/pages/Register/index";
import ContactListApp from "@/pages/ContactList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register/index.tsx" element={<Register />} />
        <Route path="/contactList/main.tsx" element={<ContactListApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
