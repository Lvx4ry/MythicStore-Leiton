import { useContext, useState } from "react";
import { context } from "../Context/CustomProvider";
import ItemCount from "./ItemCount";
import "./styles.css";

export default function ItemDetail({ item }) {
  const { addProduct } = useContext(context);

  const handleAdd = (itemCount) => {
    const contabilizedItem = { ...item, quantity: itemCount };
    addProduct(contabilizedItem, itemCount);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card item-card">
            <div className="row">
              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="images p-3">
                  <div className="text-center p-4">
                    <img
                      id="main-image"
                      className="main-image"
                      src={item.img}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <i className="fa fa-shopping-cart text-muted"></i>
                  </div>
                  <div className="mt-4 mb-3">
                    <span className="text-uppercase text-muted brand fs-6">
                      {item.game}
                    </span>
                    <h5 className="text-uppercase fs-5">{item.name}</h5>
                    <div className="price d-flex flex-row align-items-center">
                      <span className="act-price fs-5">{"$" + item.price}</span>
                    </div>
                  </div>
                  <p className="about">{item.description}</p>

                  <div className="cart mt-4 align-items-center">
                    <ItemCount stock={item.stock} handleAdd={handleAdd} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
