import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { getProducts } from "../../asynmock";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItem] = useState([""]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoria) {
      getProducts()
        .then((data) => setItem(data.filter((e) => e.categoria === categoria)))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      getProducts()
        .then((data) => setItem(data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [categoria]);

  if (loading) {
    return (
      <>
        <p>Cargando..</p>
      </>
    );
  }
  return <div className="tarjetas">{<ItemList items={items} />}</div>;
};
