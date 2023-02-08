import { addDoc, serverTimestamp } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { soldCollection } from "../../firebaseConfig";

import { context } from "../Context/CustomProvider";
import "./styles.css";

export default function CheckoutForm() {
  const { cartQuantity, cart, cartTotalPrice, handleBuy, clearCart } =
    useContext(context);

  let [customerData, setCustomerData] = useState({});
  let [checkoutFinished, setCheckoutFinished] = useState(false);
  let [validEmail, setValidEmail] = useState(false);
  let [validPhone, setValidPhone] = useState(false);
  let [validCard, setValidCard] = useState(false);

  useEffect(() => {
    const sendCheckout = () => {
      const datedData = {
        ...customerData,
        time: serverTimestamp(),
      };

      const query = addDoc(soldCollection, datedData);

      query.then((res) => handleBuy(res.id));
      clearCart();
    };

    checkoutFinished && sendCheckout();
  }, [checkoutFinished]);

  const minPhoneLength = 8;
  const maxPhoneLength = 15;
  const cardMinLength = 13;
  const cardMaxLength = 19;

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    const pushValue = () => {
      setCustomerData({
        ...customerData,
        [key]: value,
      });
    };

    switch (key) {
      case "email":
        value.length >= 3 && value.includes("@")
          ? setValidEmail(true)
          : setValidEmail(false);
        break;
      case "phone":
        value.length >= minPhoneLength && value.length <= maxPhoneLength
          ? setValidPhone(true)
          : setValidPhone(false);
        break;
      case "card_number":
        value.length >= cardMinLength && value.length <= cardMaxLength
          ? setValidCard(true)
          : setValidCard(false);
    }

    pushValue();
  };

  const submitCheckout = (e) => {
    e.preventDefault();

    const reducedCart = cart.map((item) => {
      return { id: item.id, price: item.price, quantity: item.quantity };
    });

    const orderNumber = Math.floor(Math.random() * 900000);

    setCustomerData({
      ...customerData,
      cart: reducedCart,
      order_number: orderNumber,
    });

    setCheckoutFinished(Object.keys(customerData).length === 8 ? true : false);
  };

  return cart.length < 1 ? (
    <Navigate to="/cart" />
  ) : checkoutFinished ? (
    <Navigate to="/" />
  ) : (
    <div className="my-1 container px-1 py-5 mx-auto">
      <div className="my-1 row d-flex justify-content-center">
        <div className="my-1 col-xl-7 col-lg-8 col-md-9 col-11 text-center d-flex flex-column justify-content-center align-items-center">
          <h3>Finish your purcharse! </h3>
          <p className="text-center col-12 col-md-6">
            Complete this form to finish shopping!
          </p>
          <div className="my-1 card col-10 col-md-12 p-3 form-container">
            <form className="form-card">
              <div className="my-1 row justify-content-between text-left">
                <div className="my-1 form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label text-start px-3">
                    First name<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="Enter your first name"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-1 form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label text-start px-3">
                    Last name<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Enter your last name"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="my-1 row justify-content-between text-left">
                <div className="my-1 form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label text-start px-3">
                    E-mail
                    <span className="text-danger mx-2">*</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your E-mail"
                    onChange={handleInputChange}
                  />
                  {!validEmail && (
                    <span className="text-danger text-start ms-2">
                      Please use a correct email
                    </span>
                  )}
                </div>
                <div className="my-1 form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label text-start px-3">
                    Phone number
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter your Phone number"
                    onChange={handleInputChange}
                  />
                  {!validPhone && (
                    <span className="text-danger text-start ms-2">
                      Please use a correct Phone number
                    </span>
                  )}
                </div>
              </div>
              <div className="my-1 row justify-content-between text-left">
                <div className="my-1 form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label text-start px-3">
                    City<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter your City"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-1 form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label text-start px-3">
                    Direction<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="direction"
                    name="direction"
                    placeholder="Enter your Direction"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="my-1 row justify-content-between text-left"></div>
              <div className="my-1 row justify-content-between text-left">
                <div className="my-1 form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label text-start px-3">
                    Debit/Credit Card number
                    <span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="card_number"
                    name="card_number"
                    placeholder="Enter your Credit/Debit Card number"
                    onChange={handleInputChange}
                  />
                  {!validCard && (
                    <span className="text-danger text-start ms-2">
                      Please use a correct Debit or Credit Card
                    </span>
                  )}
                </div>
                <div className="my-1 form-group col-sm-6 flex-column d-flex align-items-end">
                  <h6 className="card-subtitle col-12 col-md-10 text-start py-2">
                    Cart Size: {cartQuantity} items
                  </h6>
                  <h5 className="card-subtitle col-12 col-md-10 text-start py-2">
                    Total Price: ${cartTotalPrice}
                  </h5>
                </div>
              </div>
              <div className="my-1 row justify-content-end m-2">
                <div className="my-1 form-group col-12 justify-content-center justify-content-md-end d-flex">
                  <button
                    type="submit"
                    onClick={submitCheckout}
                    className="btn btn-success"
                  >
                    Finish Checkout
                  </button>
                  <span className="text-danger text-start ms-2"></span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
