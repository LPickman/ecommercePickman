// main.jsx
import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot desde react-dom/client
import App from "./App.jsx"; // Ajusta la ruta de importación según la ubicación de App.jsx
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
