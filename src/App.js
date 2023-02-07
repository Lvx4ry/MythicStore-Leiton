import "./App.css";
import ItemListContainer from "./Components/Body/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Header/NavBar";
import ItemDetailContainer from "./Components/Body/ItemDetailContainer";
import Empty from "./Components/Body/Empty";
import CartProvider from "./Components/Context/CustomProvider";
import Cart from "./Components/Body/Cart";
import SearchProvider from "./Components/Context/SearchProvider";
import BuyForm from "./Components/Body/BuyForm";

function App() {
  return (
    <CartProvider>
      <SearchProvider>
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
            <Route path="/payment" element={<BuyForm />} />
            <Route path="*" element={<Empty />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
