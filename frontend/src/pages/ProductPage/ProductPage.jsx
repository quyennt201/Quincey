import React, { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { Slider } from "antd";
import "./ProductPage.css";
import CardItem from "../../components/Card/CardItem";
import productService from "../../services/ProductService";
import Loading from "../../components/Loading/Loading";
import ProductAddForm from "../../components/AddForm/ProductAddForm";
import ToastMess from "../../components/ToastMess/ToastMess";

function ProductPage() {
  const [data, setData] = useState([]);
  const [dataUpdate, setDataUpdate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayForm, setDisplayForm] = useState(false); // display the information filling form
  const [isUpdate, setIsUpdate] = useState(false); // false - form update && true - form add new
  const [isDelete, setIsDelete] = useState(false);
  const [toastMess, setToastMess] = useState(false);
  const [txtToast, setTxtToast] = useState("");
  const [valueSliderMin, setValueSliderMin] = useState(0); // value min of price in search
  const [valueSliderMax, setValueSliderMax] = useState(100); // value max of price in search
  const name = useParams().name || "";

  const trademark = ["Chanel", "Dior", "LV"];
  const onChange = (value) => {
    setValueSliderMin(value[0]);
    setValueSliderMax(value[1]);
  };

  const getData = async () => {
    setLoading(true);
    let res = {};
    if (name) {
      res = await productService.getProductByCategory(name);
    } else {
      res = await productService.getProducts();
    }
    setData(res?.data);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    getData();
    window.scrollTo(0, 0);
  }, [name, displayForm, isDelete]);

  return (
    <div className="product">
      {loading && <Loading />}
      {toastMess && (
        <ToastMess
          type="success"
          txt={txtToast}
          setToastMess={setToastMess}
          setTxtToast={setTxtToast}
          style={{ top: "130px" }}
        />
      )}
      {!name && (
        <div className="product-add">
          <button
            className={displayForm ? "product-list-btn" : "product-add-btn"}
            onClick={() => setDisplayForm(!displayForm)}
          >
            {displayForm ? "Product List" : "Add New Product"}
          </button>
        </div>
      )}
      <div className="product-search">
        <div className="product-search-category">
          <form>
            <p className="p-title">Category</p>
            <input
              type="radio"
              className="p-category"
              name="category"
              value="men"
            />
            <label for="">Men</label>
            <br />
            <input
              type="radio"
              className="p-category"
              name="category"
              value="women"
            />
            <label for="">Women</label>
            <br />
            <input
              type="radio"
              className="p-category"
              name="category"
              value="kids"
            />
            <label for="">Kids</label>
            <br />
            <input
              type="radio"
              className="p-category"
              name="category"
              value="lady"
            />
            <label for="">Lady</label>
            <br />
            <input
              type="radio"
              className="p-category"
              name="category"
              value="gentlemen"
            />
            <label for="">Gentlemen</label>
          </form>
        </div>
        <div className="product-search-trademark">
          <form>
            <p className="p-title">Trademark</p>
            {trademark.map((tr) => (
              <div>
                <input
                  type="radio"
                  className="p-category"
                  name="category"
                  value="men"
                />
                <label for="">{tr}</label>
              </div>
            ))}
          </form>
        </div>
        <div className="product-search-price">
          <p className="p-title">Price</p>
          <Slider
            range
            defaultValue={[0, 100]}
            onChange={onChange}
            style={{ marginLeft: "10px", marginRight: "10px" }}
            // onAfterChange={onAfterChange}
          />
          <div className="p-search-value">
            <p>${valueSliderMin}</p>
            <p>${valueSliderMax}</p>
          </div>
        </div>
        <div className="product-search-btn">
          <button className="p-search-btn">Search</button>
          <button className="p-clear-btn">Clear All</button>
        </div>
      </div>
      <div className="product-manage">
        {!displayForm ? (
          <div className="product-list">
            {data?.map((d) => (
              <CardItem
                style={{ margin: "10px" }}
                name={name}
                data={d}
                isDelete={isDelete}
                setIsDelete={setIsDelete}
                setToastMess={setToastMess}
                setTxtToast={setTxtToast}
                setDisplayForm={setDisplayForm}
                setIsUpdate={setIsUpdate}
                setDataUpdate={setDataUpdate}
              />
            ))}
          </div>
        ) : (
          <ProductAddForm
            isUpdate={isUpdate}
            dataUpdate={dataUpdate}
            setDisplayForm={setDisplayForm}
          />
        )}
      </div>
    </div>
  );
}

export default ProductPage;
