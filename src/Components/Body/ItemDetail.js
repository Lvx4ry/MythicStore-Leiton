import { useState } from "react";
import "./styles.css";

export default function ItemDetail({ item }) {
  let [itemAmount, setItemAmount] = useState(1);

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
                    <div className="col-lg-4 my-2">
                      <h6>Quantity :</h6>
                      <input
                        type="number"
                        pattern="[0-9]"
                        className="form-control text-center"
                        defaultValue={itemAmount}
                      />
                    </div>
                    <button className="btn text-uppercase mr-2 px-4">
                      Add to cart
                    </button>{" "}
                    <i className="fa fa-heart text-muted"></i>{" "}
                    <i className="fa fa-share-alt text-muted"></i>{" "}
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
