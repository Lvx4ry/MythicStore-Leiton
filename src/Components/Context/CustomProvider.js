import { useState } from "react";
import { createContext } from "react";

export const context = createContext();
const { Provider } = context;

export default function CartProvider({ children }) {
  let [cart, setCart] = useState([]);
  let [cartQuantity, setCartQuantity] = useState(0);
  let [cartTotalPrice, setCartTotalPrice] = useState(0);

  const addProduct = (product, quantity) => {
    setCart([...cart, product]);

    setCartQuantity(cartQuantity + quantity);

    setCartTotalPrice(product.price * quantity);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeProduct = (requestedProduct, amount) => {
    const newCart = cart
      .map((item) => {
        if (item.name === requestedProduct.name) {
          return item.quantity > amount
            ? { ...item, quantity: item.quantity - amount }
            : null;
        } else {
          return item;
        }
      })
      .filter((item) => item !== null);

    setCart(newCart);
  };

  const findProduct = (product) => {
    cart.includes(product);
  };

  const contextValue = {
    cart,
    cartQuantity,
    cartTotalPrice,
    addProduct,
    clearCart,
    findProduct,
    removeProduct,
  };

  return <Provider value={contextValue}>{children}</Provider>;
}
