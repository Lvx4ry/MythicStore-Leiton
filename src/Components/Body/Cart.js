import { useContext } from "react";
import { context } from "../Context/CustomProvider";

export default function Cart() {
  const { cart } = useContext(context);

  return cart ? (
    cart.map((item) => {
      return <CartItem item={item} key={item.id} />;
    })
  ) : (
    <div className="p-5">
      <p className="text-center fs-2">
        Your cart is empty! <br /> Explore our products and get started!
      </p>
    </div>
  );
}
