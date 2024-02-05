import React, { useContext } from "react";
// import { Cart } from "./cart";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, Price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart,updateCartItemCount } = useContext(ShopContext);


  
  return (
    <div className="cartItem">
      <img src={productImage} />

      <div className="description">
        <p>
          <b> {productName}</b>
        </p>
        <p>
          <b>RS {Price}</b>
        </p>
        <div className="countHandler">
          <button on onClick={() => removeFromCart(id)}>
            -
          </button>

          <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value))}/>

       

          

          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );


};
