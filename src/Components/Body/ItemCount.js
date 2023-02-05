import { useEffect, useState } from "react";
import "./styles.css";

export default function ItemCount({ stock, handleAdd }) {
  let [itemCount, setItemCount] = useState(1);

  const countAdd = () => {
    itemCount <= stock && setItemCount(itemCount + 1);
  };

  const countSubstract = () => {
    itemCount > 1 && setItemCount(itemCount - 1);
  };

  const confirmBuy = () => {
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
            onClick={countSubstract}
          >
            -
          </button>
          <p className="quantity-counter fs-3 mx-3 text-center">{itemCount}</p>

          <button
            type="button"
            className="btn btn-outline-dark quantity-button"
            onClick={countAdd}
            disabled={itemCount === stock}
          >
            +
          </button>
        </div>
      </div>
      <button className="btn text-uppercase px-3" onClick={confirmBuy}>
        Add to cart
      </button>
    </>
  );
}
