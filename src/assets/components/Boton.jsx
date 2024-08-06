import React from "react";
import "./Boton.css";

export const Boton = ({ texto, color, funcion }) => {
  return (
    <button onClick={funcion} className="boton" style={{ background: color }}>
      {texto}
    </button>
  );
};
