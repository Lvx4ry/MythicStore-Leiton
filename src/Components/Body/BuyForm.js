import { useContext, useState } from "react";
import { context } from "../Context/CustomProvider";
import "./styles.css";

export default function BuyForm() {
  const { cartQuantity, cart, cartTotalPrice } = useContext(context);

  let [customerData, setCustomerData] = useState({});

  let [validEmail, setValidEmail] = useState(false);
  let [validPhone, setValidPhone] = useState(false);

  const minPhoneLength = 8;

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
        value.includes("@") ? setValidEmail(true) : setValidEmail(false);
        break;
      case "phone":
        value.length >= minPhoneLength
          ? setValidPhone(true)
          : setValidPhone(false);
    }

    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
  };

  const submitCheckout = (e) => {
    e.preventDefault();
    console.log(customerData);
    //subir todos los datos del form como object a la DB
  };

  return (
    <div className="my-1 container-fluid px-1 py-5 mx-auto">
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
                    id="fname"
                    name="fname"
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
                    id="lname"
                    name="lname"
                    placeholder="Enter your last name"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="my-1 row justify-content-between text-left">
                <div className="my-1 form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label text-start px-3">
                    E-mail
                    <span className="text-danger mx-2">
                      {validEmail ? "*" : "* please use a correct email"}
                    </span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your E-mail"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-1 form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label text-start px-3">
                    Phone number
                    <span className="text-danger">
                      {" "}
                      {validPhone ? "*" : "* incorrect Phone number"}
                    </span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter your Phone number"
                    onChange={handleInputChange}
                  />
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
                </div>
                <div className="my-1 form-group col-sm-6 flex-column d-flex align-items-end">
                  <h6 className="card-subtitle col-6 text-start py-2">
                    Cart Size: {cartQuantity} items
                  </h6>
                  <h5 className="card-subtitle col-6 text-start py-2">
                    Total Price: ${cartTotalPrice}
                  </h5>
                </div>
              </div>
              <div className="my-1 row justify-content-end m-2">
                <div className="my-1 form-group col-12 justify-content-end d-flex">
                  <button
                    type="submit"
                    onClick={submitCheckout}
                    className="btn btn-success"
                  >
                    Finish Checkout
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
