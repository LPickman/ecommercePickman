import "./CartWidget.css";

export const CartWidget = ({ funcion }) => {
  console.log(funcion);
  return <button onClick={funcion}>🛒</button>;
};
