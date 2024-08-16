import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import "./NavBar.css";

export const Navbar = ({ titulo }) => {
  const click = () => {
    alert("Hiciste click al carrito");
  };
  return (
    <nav className="NavBar">
      <Link to="/">{<h2>{titulo}</h2>}</Link>
      <Link to="/categoria/ropa">Ropa</Link>
      <Link to="/categoria/calzado">Calzado</Link>
      <Link to="/categoria/accesorios">Accesorios</Link>
      <CartWidget funcion={click} />
    </nav>
  );
};
