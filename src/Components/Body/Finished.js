import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { context } from "../Context/CustomProvider";

export default function Finished() {
  const { buyOrder } = useContext(context);

  return (
    <div className="container bg-success d-flex flex-column rounded align-items-center gap-2 border border-success col-8 my-3 p-3">
      <h2 className="text-uppercase fs-4">Thank you!</h2>
      <p className="about col-8 text-center fs-6">
        Your order has been taken, we sent you an e-mail with more detailed
        delivery information
      </p>
      <h4 className="card-subtitle fs-5">Your Order Number is: {buyOrder}</h4>
    </div>
  );
  /* !buyOrder ? (
    <Navigate to="/cart" />
  ) :  */
}
