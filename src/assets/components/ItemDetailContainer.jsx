import React, { useEffect, useState } from "react";

export const ItemDetailContainer = ({ id }) => {
  const [productoUnico, setProductoUnico] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((respuesta) => setProductoUnico(respuesta));
  }, []);

  return (
    <>
      <p>{productoUnico.description}</p>
    </>
  );
};
