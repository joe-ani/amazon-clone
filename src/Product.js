import React from "react";
// product styling dirctory👇
import "./Product.css";
import { useStateValue } from "./StateProvider";

//using 'fu... (props)...', in ES6 -> 'fu.. ({..., ... })...' to get the different product data for each component.
function Product({id, title, image, price, rating }) {



  // 👇hook used to pull values stored in the basket in reducer.js
  const [{basket}, dispatch] = useStateValue();



 const addToBasket = () => {
  // dispatch action in to data layer
  dispatch({
    type: 'ADD_TO_BASKET',
    // adds to action or items in data-layer then to basket
    item: {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    },
  });
 }

  return (
    <div className="product">
      {/* Product: Description, Price, Star-rating, product image, add-to-basket-Button  */}
      <div className="product_info">
        {/* passing in ES6 props in curley braces<>{...}</>  */}
        <p  >{title} </p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {/*mapped the rating prop value to an array as an HTML elemant😐 better explained in checkoutProduct.js🚀 :) */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt=""
      />
      <button onClick={addToBasket} >Add to Basket</button> {/* calls the addToBasket function from line ->> 16,17 */}
    </div>
  );
}

export default Product;
