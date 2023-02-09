import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { context } from "../Context/CustomProvider";
import Spinner from "./Spinner";

export default function Finished() {
  const { buyOrder, removeOrder } = useContext(context);
  let [returnValue, setReturnValue] = useState("");

  const handleHome = () => {
    removeOrder();
  };

  useEffect(() => {
    let interval;

    const timer = () => {
      interval = setInterval(() => {
        !buyOrder ? setReturnValue("Spinner") : setReturnValue("HTML");
      }, 1000);

      const timeOut = setTimeout(() => {
        clearInterval(interval);
        !buyOrder && setReturnValue("Redirect");
      }, 5000);
    };
    timer();
  }, []);

  return returnValue === "Spinner" ? (
    <Spinner />
  ) : returnValue === "HTML" ? (
    <div className="container bg-success d-flex flex-column rounded align-items-center gap-2 border border-success col-8 my-3 p-3">
      <h2 className="text-uppercase fs-4">Thank you!</h2>
      <p className="about col-8 text-center fs-6">
        Your order has been taken, we sent you an e-mail with more detailed
        delivery information
      </p>

      <h4 className="card-subtitle fs-5">Your Order Number is: {buyOrder}</h4>
      <Link
        to="/"
        className="btn btn-outline-success text-uppercase px-3 my-4 text-center col-8 col-md-2"
        onClick={handleHome}
      >
        Back to Home
      </Link>
    </div>
  ) : (
    returnValue === "Redirect" && <Navigate to="/cart" />
  );
}
