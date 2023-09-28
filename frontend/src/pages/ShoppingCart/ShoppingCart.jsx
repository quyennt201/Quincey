import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";
import CartShoppingItem from "../../components/CartShoppingItem/CartShoppingItem";
import { cartState } from "../../recoil/CartState";
import { useRecoilValue } from "recoil";
import imgPayment from "../../assets/img/method-payment.png";
import ViewMore from "../../components/ViewMore/ViewMore";
import { Outlet } from "react-router-dom";

function ShoppingCart() {
  const cart = useRecoilValue(cartState);
  const [selected, setSelected] = useState(false);

  const getCartTotal = () => {
    return cart?.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  const getTotalPrice = () => {
    return cart
      ?.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  useEffect(() => {
    getCartTotal();
    getTotalPrice();
  }, [cart]);

  return (
    <div style={{ width: "100%" }}>
      <div className="cart">
        <div style={{ width: "65%", marginRight: "30px" }}>
          <Outlet />
        </div>
        <div className="cart-checkout">
          <div className="cart-checkout-total">
            <p className="cart-total-title">Order Summary</p>
            <div className="cart-total-price">
              <p style={{ fontWeight: "500" }}>Subtotal</p>
              <p className="cart-total-number">${getTotalPrice()}</p>
            </div>
            <button className="cart-total-btn">
              Checkout Now ({getCartTotal()})
            </button>
          </div>
          <div className="cart-checkout-method">
            <p className="cart-total-title">We Accept</p>
            <img src={imgPayment} alt="method payment" />
          </div>
          <div className="cart-shipping"></div>
        </div>
      </div>
      <div className="cart-view-more">
        <ViewMore
          title="You May Also Like"
          max={6}
          style={{ margin: "0px" }}
          styleItem={{ margin: "13px" }}
          isButton={true}
        />
      </div>
    </div>
  );
}

export default ShoppingCart;
