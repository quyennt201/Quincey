import React from "react";
import { Link } from "react-router-dom";
import "./CardStyle.css";
import Loading from "../Loading/Loading";

function CardItem(props) {
  return (
    <Link
      to={`/product/detail/${props._id}`}
      style={{ textDecoration: "none" }}
    >
      <div className="c-item" style={props.style} id={props._id}>
        <div className="c-item-img">
          {props.name ? (
            <button>
              <i class="fas fa-cart-plus" style={{ marginRight: "10px" }}></i>
              Add to cart
            </button>
          ) : (
            <div className="c-item-img-btn">
              <button className="c-item-btn-edit">
                <i class="fas fa-wrench"></i>
              </button>
              <button className="c-item-btn-delete">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          )}
          <img src={props.img} />
        </div>
        <div className="c-item-infor">
          <p className="c-item-des">{props.des}</p>
          <div className="c-item-tag">
            <p>#xuhuong</p>
            <p>#dacbiet</p>
          </div>
          <p className="c-item-cost">${props.cost}</p>
          <div className="c-item-review">
            <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
            <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
            <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
            <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
            <i class="fas fa-star" style={{ color: "#D8D9DA" }}></i>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardItem;
