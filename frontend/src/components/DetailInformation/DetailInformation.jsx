import React from "react";
import "./DetailInformation.css";
import img1 from "../../assets/img/sale/sale1.jpg";

function DetailInformation(props) {
  props = {
    des: "Set váy áo croptop cổ sơ mi tay bồng tay bo chun mix chân váy xòe tiểu thư set đồ nữ kiểu hàn cao cấp",
    price: "78.88",
    items: "fashion",
    type: "dress",
    trademrak: "viviane",
    color: ["red", "blue", "yellow"],
    size: ["S", "M", "L", "XL"],
  };
  return (
    <div className="infor">
      <div className="infor-general c-infor">
        <div className="infor-general-img">
          <img src={img1} className="i-general-img-big" />
          <div className="i-general-img-small">
            <img src={img1} />
            <img src={img1} />
            <img src={img1} />
            <img src={img1} />
            <img src={img1} />
          </div>
          <div className="i-share">
            <i
              class="fas fa-share"
              style={{ color: "#8a95a8", marginRight: "10px" }}
            ></i>
            <i
              class="fab fa-facebook-messenger"
              style={{ color: "#2369e1" }}
            ></i>
            <i class="fab fa-facebook" style={{ color: "#193971" }}></i>
            <i class="fab fa-pinterest" style={{ color: "#e13737" }}></i>
            <i class="fab fa-twitter" style={{ color: "#6899ee" }}></i>
          </div>
        </div>
        <div className="infor-general-txt">
          <h2 className="i-general-des">{props.des}</h2>
          <div className="i-general-review">
            <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
            <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
            <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
            <i class="fas fa-star" style={{ color: "var(--star-color)" }}></i>
            <i class="fas fa-star" style={{ color: "#D8D9DA" }}></i>
            <p style={{ color: "var(--star-color)" }}>(1000+ Reviewrs)</p>
          </div>
          <p className="i-general-price">${props.price}</p>
          <div className="i-general-infor">
            <div className="i-general-infor-form">
              <p className="i-label">items</p>
              <p className="i-txt">{props.items}</p>
            </div>
            <div className="i-general-infor-form">
              <p className="i-label">type</p>
              <p className="i-txt">{props.type}</p>
            </div>
            <div className="i-general-infor-form">
              <p className="i-label">trademark</p>
              <p className="i-txt">{props.trademrak}</p>
            </div>
            <div className="i-general-infor-form">
              <p className="i-label">Color</p>
              {props.color.map((c) => (
                <button className="i-item">{c}</button>
              ))}
            </div>
            <div className="i-general-infor-form">
              <p className="i-label">size</p>
              {props.size.map((c) => (
                <button className="i-item">{c}</button>
              ))}
            </div>
            <div className="i-general-infor-form">
              <p className="i-label">quantity</p>
              <div className="i-input-quantity">
                <button className="i-input-select"><i class="fas fa-minus"></i></button>
                <input type="text" className="i-input-display" value='1' />
                <button className="i-input-select"><i class="fas fa-plus"></i></button>
              </div>
            </div>
          </div>
          <div className="i-general-btn">
            <button className="i-general-btn-add i-btn"><i class="fas fa-cart-plus"></i> Add to cart</button>
            <button className="i-general-btn-buy i-btn">Buy now</button>
          </div>
        </div>
      </div>
      <div className="infor-detail c-infor"></div>
      <div className="infor-des c-infor"></div>
      <div className="infor-review c-infor"></div>
    </div>
  );
}

export default DetailInformation;
