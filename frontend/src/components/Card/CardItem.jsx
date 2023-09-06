import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CardStyle.css";
import Loading from "../Loading/Loading";
import Popup from "../Popup/Popup";

function CardItem(props) {
  const {
    data,
    style,
    name,
    isDelete,
    setIsDelete,
    setIsUpdate,
    setDataUpdate,
    setDisplayForm,
    setToastMess,
    setTxtToast
  } = props;

  const [popup, setPopup] = useState(false);

  const handleDelete = () => {
    setPopup(true);
    console.log(popup);
  };

  const handleUpdate = () => {
    setDataUpdate(data);
    setDisplayForm(true);
    setIsUpdate(true);
  };

  const handleAddToCard = () => {};
  return (
    <div className="c-item" style={style} id={data?._id}>
      {popup && (
        <Popup
          show={popup}
          id={data?._id}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          setToastMess={setToastMess}
          setTxtToast={setTxtToast}
        />
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
        <p className="c-item-cost">${data?.price}</p>
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
