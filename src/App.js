import "./App.css";
import ItemListContainer from "./Components/Body/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Header/NavBar";
import ItemDetailContainer from "./Components/Body/ItemDetailContainer";
import Empty from "./Components/Body/Empty";
import CartProvider from "./Components/Context/CustomProvider";
import Cart from "./Components/Body/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting={"Mythic Store, your virtual items e-commerce!"}
              />
            }
          />
          <Route
            path="/category/:categoryName"
            element={
              <ItemListContainer
                greeting={"Mythic Store, your virtual items e-commerce!"}
              />
            }
          />
          <Route
            path="/item/:itemID"
            element={
              <ItemDetailContainer
                greeting={"Mythic Store, your virtual items e-commerce!"}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Empty />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
