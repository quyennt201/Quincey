import React, { useState, useEffect } from "react";
import "./ShoppingCartElement.css";
import { cartState } from "../../recoil/CartState";
import { useRecoilValue } from "recoil";
import CartShoppingItem from "../CartShoppingItem/CartShoppingItem";

function ShoppingCartElement() {
  const cart = useRecoilValue(cartState);
  const [selected, setSelected] = useState(false);
  return (
    <div className="cart-items">
      {/* <div className="cart-items-all">
            <input
              type="checkbox"
              checked={selected}
              onChange={(e) => {
                setSelected(e.target.checked);
              }}
            />
            <p>All Items {getCartTotal()}</p>
          </div> */}
      <div className="cart-item-list">
        {cart?.map((c, idx) => (
          <CartShoppingItem
            idx={idx}
            data={c}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </div>
  );
}

export default ShoppingCartElement;
