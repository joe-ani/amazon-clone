import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer"; //allows access to the getBasketTotal in reduce.js
import {  useNavigate } from "react-router-dom";


import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispach] = useStateValue();
   const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        // renders as html to the page👇
        renderText={(value) => (
          <>
            {console.log(value)}
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2} // rounds up to 2 decimal places 1,000.99
        value={getBasketTotal(basket)} //calls back function in reduce.js
        displayType={"text"}
        thousandSeparator={true} //Adds a comma to 1,000 values
        prefix={"$"}
      />

      <button onClick={e => navigate('/payment')} >Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
