import React from "react";
import "./CardStyle.css";

function CardItem(props) {
  return (
    <div className="c-item">
      <img src={props.img} />
      <div className="c-item-infor">
        <p className="c-item-des">{props.des}</p>
        <div className="c-item-tag">
          <p>#xuhuong</p>
          <p>#dacbiet</p>
        </div>
        <p className="c-item-cost">${props.cost}</p>
        <div className="c-item-review">
          <i class="fas fa-star" style={{ color: "#F8DE22" }}></i>
          <i class="fas fa-star" style={{ color: "#F8DE22" }}></i>
          <i class="fas fa-star" style={{ color: "#F8DE22" }}></i>
          <i class="fas fa-star" style={{ color: "#F8DE22" }}></i>
          <i class="fas fa-star" style={{ color: "#D8D9DA" }}></i>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
