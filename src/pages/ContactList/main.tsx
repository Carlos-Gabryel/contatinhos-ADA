import React from "react";
import ReactDOM from "react-dom/client";
import ContactListApp from ".";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContactListApp />
  </React.StrictMode>
);
