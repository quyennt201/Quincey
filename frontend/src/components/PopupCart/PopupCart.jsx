import React, { useState, useRef } from "react";
import "./PopupCart.css";
import "../../components/DetailInformation/DetailInformation.css";
import { addToCart, cartState } from "../../recoil/CartState";
import { useRecoilState } from "recoil";

function PopupCart(props) {
  const { isCartPopup, setIsCartPopup, data } = props;
  const [cart, setCart] = useRecoilState(cartState);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [cartItem, setCartItem] = useState({
    product: data,
    quantity: quantity,
    color: "",
    size: "",
  });

  const handleClick = (name, value) => {
    setCartItem({
      ...cartItem,
      [name]: value,
    });
  };

  // add
  const handleClickIncrease = () => {
    handleClick("quantity", quantity + 1);
    setQuantity(quantity + 1);
  };

  // sub
  const handleClickDecrease = () => {
    handleClick("quantity", quantity - 1);
    setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    const newCart = addToCart(cart, cartItem);
    setCart(newCart);
    setIsCartPopup(false);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div
      className="popup-modal"
      style={isCartPopup ? { display: "flex" } : { display: "none" }}
    >
      <div className="popup-cart">
        <div className="popup-cart-body">
          <div className="popup-cart-title">Select information</div>
          <div className="i-general-infor-form">
            <p className="i-label">Color</p>
            {data?.color?.map((c) => (
              <button
                value={c}
                className={
                  c === selectedColor ? "i-item i-item-focus" : "i-item"
                }
                onClick={(e) => {
                  handleClick("color", e.target.innerText);
                  setSelectedColor(c);
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="i-general-infor-form">
            <p className="i-label">size</p>
            {data?.size?.map((c) => (
              <button
                className={
                  c === selectedSize ? "i-item i-item-focus" : "i-item"
                }
                onClick={(e) => {
                  handleClick("size", e.target.innerText);
                  setSelectedSize(c);
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="i-general-infor-form">
            <p className="i-label">quantity</p>
            <div className="i-input-quantity">
              <button className="i-input-select" onClick={handleClickDecrease}>
                <i class="fas fa-minus"></i>
              </button>
              <input type="text" className="i-input-display" value={quantity} />
              <button className="i-input-select" onClick={handleClickIncrease}>
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="popup-cart-footer">
          <button
            className="popup-cart-btn"
            onClick={() => setIsCartPopup(false)}
          >
            Cancel
          </button>
          <button
            className="popup-cart-btn popup-cart-btn-primary"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupCart;
