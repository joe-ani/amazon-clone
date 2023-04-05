import React from "react";
import { useInView } from 'react-intersection-observer';
// chreckout styling directory 👇
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
// components imports👇
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Header from "./Header";

function Checkout() {

  const {ref: myRef , inView: isVisible}  = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  // 👇hook used to pull values stored in the basket in reducer.js
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
       < Header className='header' />
      <div className="checkout_left">
        <img
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_DarkBackground_2_NotApproved._TTW_.jpg"
          alt=""
          className="checkout_ad"
        />
        <div>   
          <h2 ref={myRef} className={`h3 ${isVisible ? 'slide' : ''} `}> { user ? `Hello, ${user.email}👋`: 'Hello, Guest👋'  }</h2>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {/*CheckOutProduct  components👇*/}
          {/* mapping through the basket to get each product component */}
          {basket.map(item => (
            <CheckoutProduct id={item.id} rating={item.rating} image={item.image} title={item.title} price={item.price} />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
