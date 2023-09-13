import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CardStyle.css";
import { addToCart, cartState } from "../../recoil/CartState";
import { useRecoilState, useSetRecoilState } from "recoil";
import { popupState } from "../../recoil/PopupState";

function CardItem(props) {
  const { data, style, name, setIsUpdate, setDataUpdate, setDisplayForm } =
    props;

  const setPopup = useSetRecoilState(popupState);
  const [cart, setCart] = useRecoilState(cartState);

  const handleDelete = () => {
    setPopup({
      status: true,
      id: data?._id,
    });
  };

  const handleUpdate = () => {
    setDataUpdate(data);
    setDisplayForm(true); // display form enter information
    setIsUpdate(true);
  };

  const handleAddToCard = () => {
    const newCart = addToCart(cart, data);
    setCart(newCart);
  };

  const getPriceSale = () => {
    const price = data?.price;
    return price - (price * data?.percent) / 100;
  };

  return (
    <div className="c-item" style={style} id={data?._id}>
      {data?.sale && data?.percent > 0 && (
        <div className="c-sale-percent">
          <i class="fas fa-bolt"></i>
          <p className="c-sale-percent-txt">-{data?.percent}%</p>
        </div>
      )}
      <div className="c-item-img">
        {name ? (
          <button onClick={handleAddToCard}>
            <i class="fas fa-cart-plus" style={{ marginRight: "10px" }}></i>
            Add to cart
          </button>
        ) : (
          <div className="c-item-img-btn">
            <button className="c-item-btn-edit" onClick={handleUpdate}>
              <i class="fas fa-wrench"></i>
            </button>
            <button className="c-item-btn-delete" onClick={handleDelete}>
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        )}
        <Link
          to={`/product/detail/${data?._id}`}
          style={{ textDecoration: "none" }}
        >
          <img src={data?.img[0]} style={{ height: "278px", width: "100%" }} />
        </Link>
      </div>
      <div className="c-item-infor">
        <p className="c-item-des">{data?.des}</p>
        <div className="c-item-tag">
          <p>#xuhuong</p>
          <p>#dacbiet</p>
        </div>
        {data?.sale && data?.percent > 0 ? (
          <div className="c-sale-price">
            <p className="c-sale-price-cost">${getPriceSale()}</p>
            <del>
              <p className="c-sale-price-sale">{data?.price}</p>
            </del>
          </div>
        ) : (
          <p className="c-item-cost">${data?.price}</p>
        )}
        {/* <p className="c-item-cost">${data?.price}</p> */}
        <div className="c-item-review">
          <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
          <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
          <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
          <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
          <i class="fas fa-star" style={{ color: "#D8D9DA" }}></i>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
