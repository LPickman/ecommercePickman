import React, { useState } from "react";
import { Boton } from "../Boton";

export const ItemCount = () => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    return setCount(count + 1);
  };

  const restar = () => {
    return setCount(count - 1);
  };

  return (
    <div className="contador">
      <Boton texto="-" funcion={restar} />
      <p>{count}</p>
      <Boton texto="+" funcion={sumar} />
    </div>
  );
};
