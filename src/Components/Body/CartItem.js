import { useContext } from "react";
import CartCounter from "./CartCounter";
import { context } from "../Context/CustomProvider";
import "./styles.css";

export default function CartItem({ item }) {
  const { addProduct, removeProduct } = useContext(context);

  const abreviatedDescription =
    item.description.length > 50
      ? item.description.slice(0, 50) + "..."
      : item.description;

  const handleAddFromCart = () => {
    addProduct(item, 1);
  };

  const handleRemoveUnit = () => {
    removeProduct(item, 1);
  };

  const handleRemoveTotal = () => {
    removeProduct(item, item.quantity);
  };

  return (
    <>
      <div className="card mb-1 col-8 col-lg-6">
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center align-items-center my-2">
            <img
              src={item.img}
              className="img-fluid rounded-start"
              alt={`${item.name} Image`}
            />
          </div>
          <div className="col-md-8  d-flex flex-column flex-md-row align-items-center">
            <div className="card-body col-12 col-md-8">
              <h4 className="card-title">{item.name}</h4>
              <h6 className="card-subtitle">${item.price} /u </h6>
              <p className="card-text col-12 col-md-7 my-1">
                {abreviatedDescription}
              </p>
              <p className="card-text">
                <small className="text-muted">Added at: {item.time}</small>
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-5 p-2 d-flex flex-column justify-content-end align-items-start mx-3 my-2 flex-wrap">
              <CartCounter
                item={item}
                handleAddFromCart={handleAddFromCart}
                handleRemoveUnit={handleRemoveUnit}
                handleRemoveTotal={handleRemoveTotal}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
