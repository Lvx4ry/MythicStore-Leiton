import { useEffect, useState } from "react";
import "./styles.css";

export default function ItemCount({ stock, handleAdd }) {
  let [itemCount, setItemCount] = useState(1);

  const add = () => {
    itemCount <= stock && setItemCount(itemCount + 1);
  };

  const substract = () => {
    itemCount > 1 && setItemCount(itemCount - 1);
  };

  const confirm = () => {
    handleAdd(itemCount);
  };

  return (
    <>
      <div className="col-lg-4">
        <h6>Quantity :</h6>
        <div className="quantity-container d-flex align-items-start gap-2 ">
          <button
            type="button"
            className="btn btn-outline-dark quantity-button"
            onClick={substract}
          >
            -
          </button>
          <p className="quantity-counter fs-3 mx-3 text-center">{itemCount}</p>

          <button
            type="button"
            className="btn btn-outline-dark quantity-button"
            onClick={add}
            disabled={itemCount === stock}
          >
            +
          </button>
        </div>
      </div>
      <button className="btn text-uppercase px-3" onClick={confirm}>
        Add to cart
      </button>
    </>
  );
}
