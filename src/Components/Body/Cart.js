import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { context } from "../Context/CustomProvider";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart, cartTotalPrice } = useContext(context);

  return cart.length > 0 ? (
    <>
      <div className="d-flex justify-content-center gap-1 flex-wrap m-3">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
        <div className="col-8 col-lg-6 d-flex flex-row flex-wrap justify-content-end">
          <h3 className="col-11 col-md-6">Total Price: ${cartTotalPrice}</h3>
          <Link to="/payment" className="btn btn-success col-md-4">
            Finish Shopping
          </Link>
        </div>
      </div>
    </>
  ) : (
    <div className="p-5 d-flex flex-column align-items-center">
      <p className="text-center fs-2">
        Your cart is empty! <br /> Explore our products and get started!
      </p>
      <Link
        to="/"
        className="btn text-uppercase px-3 my-4 text-center col-8 col-md-2"
      >
        Back to Home
      </Link>
    </div>
  );
}
