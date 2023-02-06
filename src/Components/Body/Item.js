import { Link } from "react-router-dom";

import "./styles.css";

export default function Item({ item }) {
  return (
    <>
      <Link
        to={"/item/" + item.id}
        className="card col-8 col-md-3 col-lg-2 border-dark my-3 mx-1"
      >
        <div className="img-container ">
          <img
            src={item.img}
            alt={item.name + "'s Image"}
            className="card-img-top p-2 border-bottom border-1"
          />
        </div>
        <span className="card-subtitle text-dark mt-2 d-inline ps-3 fs-4">
          {"$" + item.price}
        </span>
        <div className="card-body">
          <h5 className="card-title fs-5 col-12">{item.name}</h5>
        </div>
        <span className="card-subtitle text-muted mt-2 d-inline ps-3 pb-1">
          {item.game}
        </span>
      </Link>
    </>
  );
}
