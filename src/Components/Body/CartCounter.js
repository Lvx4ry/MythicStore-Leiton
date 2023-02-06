import "./styles.css";

export default function CartCounter({
  item,
  handleAddFromCart,
  handleRemoveUnit,
  handleRemoveTotal,
}) {
  //const { handleAddFromCart, handleRemoveUnit, handleRemoveTotal } =
  //cartFunctions;

  const cartCounterAdd = () => {
    handleAddFromCart();
  };
  const cartCounterRemoveUnit = () => {
    handleRemoveUnit();
  };
  const cartCounterRemoveTotal = () => {
    handleRemoveTotal();
  };

  return (
    <>
      <h6 className="py-2 col-12">Quantity :</h6>
      <div className="quantity-container d-flex align-items-start justify-content-start justify-content-md-between justify-content-lg-start col-12">
        <button
          type="button"
          className="btn btn-outline-dark quantity-button"
          onClick={cartCounterRemoveUnit}
        >
          -
        </button>
        <p className="quantity-counter fs-3 mx-3 text-center">
          {item.quantity}
        </p>

        <button
          type="button"
          className="btn btn-outline-dark quantity-button"
          onClick={cartCounterAdd}
          disabled={item.quantity === item.stock}
        >
          +
        </button>
      </div>
      <div className="d-flex flex-wrap flex-column col-12">
        <h6 className="card-subtitle text-muted">Unit Price: ${item.price}</h6>
        <h5 className="card-subtitle col-12 py-2">
          Total: ${item.price * item.quantity}
        </h5>
      </div>
      <div className="d-flex fle-row justify-content-end col-12 mt-auto">
        <button
          type="button"
          className="col-12 btn btn-danger btn-outline-dark quantity-button"
          onClick={cartCounterRemoveTotal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash3"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
          </svg>
        </button>
      </div>
    </>
  );
}
