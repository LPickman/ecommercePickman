import React from "react";
import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        //El Key si o si tiene que pasarse, ya que el map va a retornar un producto que necesita diferenciar.
        <Item key={item.id} producto={item} />
      ))}
    </>
  );
};
