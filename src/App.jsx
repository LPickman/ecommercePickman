import { Boton } from "./assets/components/Boton.jsx";
import { ItemCount } from "./assets/components/ItemCount/ItemCount.jsx";
import { ItemListContainer } from "./assets/components/ItemListContainer.jsx";
import { Navbar } from "./assets/components/NavBar.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar titulo="ShopiFy" />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/contacto" element={<h2>Contacto</h2>} />

          {/* <ItemCount /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
