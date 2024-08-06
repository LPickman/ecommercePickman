import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItem] = useState([""]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <>
        <p>Cargando..</p>
      </>
    );
  }
  return <div className="tarjetas">{<ItemList items={items} />}</div>;
};
