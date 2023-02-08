import { useEffect, useState } from "react";
import { createContext } from "react";

export const context = createContext();
const { Provider } = context;

export default function CartProvider({ children }) {
  let [cart, setCart] = useState([]);
  let [cartQuantity, setCartQuantity] = useState(0);
  let [cartTotalPrice, setCartTotalPrice] = useState(0);
  let [buyOrder, setBuyOrder] = useState();

  useEffect(() => {
    setCartQuantity(
      cart
        .map((item) => item.quantity)
        .reduce((a, b) => {
          return a + b;
        }, 0)
    );

    setCartTotalPrice(
      cart.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0)
    );
  }, [cart]);

  const addProduct = (newProduct, amount) => {
    if (cart.some((item) => item.id === newProduct.id)) {
      setCart(
        cart.map((item) =>
          item.id === newProduct.id
            ? {
                ...newProduct,
                quantity:
                  item.quantity + amount >= item.stock
                    ? item.stock
                    : item.quantity + amount,
              }
            : item
        )
      );
    } else {
      setCart([...cart, newProduct]);
      setCartQuantity(cartQuantity + amount);
      setCartTotalPrice(cartTotalPrice + newProduct.price * amount);
    }
  };

  const clearCart = () => {
    setCart([]);
    setCartQuantity(0);
    setCartTotalPrice(0);
  };

  const removeProduct = (requestedProduct, amount) => {
    const newCart = cart
      .map((item) => {
        if (item.id === requestedProduct.id) {
          return item.quantity > amount
            ? { ...item, quantity: item.quantity - amount }
            : null;
        } else {
          return item;
        }
      })
      .filter((item) => item !== null);

    setCart(newCart);

    setCartQuantity(cartQuantity - amount);

    setCartTotalPrice(cartTotalPrice - requestedProduct.price * amount);
  };

  const findProduct = (newProduct) => {
    cart.includes(newProduct);
  };

  const handleBuy = (orderNum) => {
    setBuyOrder(orderNum);
  };

  const removeOrder = () => {
    setBuyOrder();
  };

  const contextValue = {
    cart,
    cartQuantity,
    cartTotalPrice,
    buyOrder,
    addProduct,
    clearCart,
    findProduct,
    removeProduct,
    handleBuy,
  };

  return <Provider value={contextValue}>{children}</Provider>;
}
