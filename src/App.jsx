import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { CartProvider } from "./contexts/CartContext";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/categoria/:id" element={<ItemListContainer />}>
              {" "}
            </Route>
            <Route path="/cart" element={<Cart />}>
              {" "}
            </Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}>
              {" "}
            </Route>
            <Route path="*" element={404}></Route>
          </Routes>
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}
export default App;

/*
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Components/Cart/Cart";
import NotFound from "./Components/NotFound/NotFound"; 

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
*/
