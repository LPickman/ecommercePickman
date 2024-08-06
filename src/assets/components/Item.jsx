import React, { useState } from "react";
import { Boton } from "./Boton";
import { ItemDetailContainer } from "./ItemDetailContainer";
import { ItemCount } from "./ItemCount/ItemCount";

export const Item = ({ producto }) => {
  const [detalles, setDetalles] = useState(false);

  const mostrarDetalles = () => {
    setDetalles(true);
  };

  return (
    <div className="tarjeta">
      <h2>{producto.title}</h2>
      <img src={producto.image} alt="" />
      <p>{`$${producto.price}`}</p>

      <Boton texto="Mostrar Detalles" funcion={mostrarDetalles} />
      {detalles ? (
        <>
          <ItemDetailContainer id={producto.id} />
        </>
      ) : (
        <p>Hace click para ver los detalles del producto.</p>
      )}
      <ItemCount />
    </div>
  );
};
