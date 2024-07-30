import { CartWidget } from "./CartWidget";
import "./NavBar.css";

export const Navbar = ({ titulo }) => {
  const click = () => {
    alert("Hiciste click al carrito");
  };
  return (
    <nav className="NavBar">
      <a>{titulo}</a>
      <CartWidget funcion={click} />
    </nav>
  );
};
