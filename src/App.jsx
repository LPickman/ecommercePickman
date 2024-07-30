import { ItemListContainer } from "./assets/components/ItemListContainer.jsx";
import { Navbar } from "./assets/components/NavBar.jsx";
import "./index.css";

export function App() {
  return (
    <div className="container">
      <Navbar titulo="ShopiFy" />
      <ItemListContainer />
    </div>
  );
}
