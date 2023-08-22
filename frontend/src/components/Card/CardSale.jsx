import React from "react";
import "./CardStyle.css";

function CardSale(props) {
  return (
    <div className="c-sale">
      <div className="c-sale-percent">
        <i class="fas fa-bolt"></i>
        <p className="c-sale-percent-txt">-{props.percent}%</p>
      </div>
      <img src={props.img} />
      <div className="c-sale-price">
        <p className="c-sale-price-cost">${props.cost}</p>
        <del><p className="c-sale-price-sale">{props.sale}</p></del>
      </div>
    </div>
  );
}

export default CardSale;
