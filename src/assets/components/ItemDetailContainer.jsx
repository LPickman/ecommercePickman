import React, { useEffect, useState } from "react";
import { getProductsById } from "../../asynmock";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [productoUnico, setProductoUnico] = useState({});
  // const [id, setId] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    getProductsById(id).then((respuesta) => setProductoUnico(respuesta));
  }, [id]);

  return (
    <div className="descripcion">
      <img src={productoUnico.imagen} alt="Imagen" />
      <h2>{productoUnico.nombre}</h2>
      <h3>${productoUnico.precio}</h3>
      <h4>Descripción: {productoUnico.descripcion}.</h4>
    </div>
  );
};
