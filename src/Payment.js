import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

import { Link, useNavigate } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

function Payment() {
  const [{ user, basket }, dispach] = useStateValue();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProccessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  //   when there is a change in basket 'incresase or decrease in price' make a request to stripe for a new client secret👇
  useEffect(() => {
    //   generate client secrete
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects the total in a curency subunits dollars ->> cents
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    //  handle stripe functionallity
    e.preventDefault();
    setProccessing(true);
    navigate("./order");

    const payload = await stripe
      ?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements?.getElement(CardElement),
        },
      })
      .then(({ paymentIntend }) => {
        // payment comfirmation
        setSucceeded(true);
        setError(null);
        setProccessing(false);
      });
  };

  const handleChange = async (e) => {
    //   listen for user card detail input and display errors in card detail
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      {/* <Header className="header" /> */}
      <h1 className="h1">
        Checkout (<Link to="/checkout">{basket?.length} items</Link>)
      </h1>
      <div className="payment_container">
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React lane</p>
            <p>Lagos NG</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit} action="">
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  // renders as html to the page👇
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2} // rounds up to 2 decimal places 1,000.99
                  value={getBasketTotal(basket)} //calls back function in reduce.js
                  displayType={"text"}
                  thousandSeparator={true} //Adds a comma to 1,000 values
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
