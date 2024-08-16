import React, { useState } from "react";
import { Boton } from "./Boton";
import { ItemDetailContainer } from "./ItemDetailContainer";
import { ItemCount } from "./ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const Item = ({ producto }) => {
  const [detalles, setDetalles] = useState(false);

  // const mostrarDetalles = () => {
  //   setDetalles(true);
  // };

  return (
    <div className="tarjeta">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt="" />
      <p>{`$${producto.precio}`}</p>

      {/* <Boton texto="Mostrar Detalles" funcion={mostrarDetalles} /> */}
      <Link to={`/detalles/${producto.id}`}>Ver detalles</Link>
      {detalles ? (
        <>
          <ItemDetailContainer />
        </>
      ) : (
        <p>Hace click para ver los detalles del producto.</p>
      )}
      <ItemCount />
    </div>
  );
};
