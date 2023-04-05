import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";


function CheckoutProduct({ id, image, title, price, rating }) {


     // 👇hook used to pull values stored in the basket in reducer.js
 const [{basket}, dispatch] = useStateValue();


const removeFromBasket = () => {
      // dispatch action ->> REMOVE_FROM_BASKET in to data layer
  dispatch({
    type: 'REMOVE_FROM_BASKET',
      id: id, // ->> to find a specific product
        
  });
}

  return (
    <div className="chectoutProduct">
      {/* product image */}
      <img className="checkoutProduct_img" src={image} />
      {/* info */}
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
     
      <p className="checkoutProduct_price">
        <small>$</small>
        <strong>{price}</strong>
      </p>

      <div className="checkoutProduct_rating">
        {Array(rating) //craetes an array of length ->> (rating) <<- this is prop
          .fill() // fills the Array with rating prop value(rating) ->> 1-5 [1 , 2, 3, 4, 5]
          .map((_, i) => ( //mapps(replaces every value in the array with ->> '<p>⭐</p>') the Array to the HTML or JSX and determines how many <p> tag is rendered on the screen :) 
            <p>⭐</p>
          ))}
      </div>
      <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
