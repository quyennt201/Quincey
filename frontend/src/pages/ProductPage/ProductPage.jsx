import React, { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { Slider } from "antd";
import "./ProductPage.css";
import CardItem from "../../components/Card/CardItem";
import productService from "../../services/ProductService";
import Loading from "../../components/Loading/Loading";
import ProductAddForm from "../../components/AddForm/ProductAddForm";
import ToastMess from "../../components/ToastMess/ToastMess";
import {
  CATEGORY,
  TRADEMARK,
  SIZE,
  COLOR,
  STYLE,
  TYPE,
} from "../../datas/DATA";

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
    // setDisplayForm(false)
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
        {!name ? (
          <div className="product-search-item">
            <form>
              <p className="p-title">Type</p>
              {TYPE?.map((tr) => (
                <>
                  <input
                    type="radio"
                    className="p-category"
                    name="type"
                    value={tr.value}
                  />
                  <label for="type">{tr.label}</label>
                  <br />
                </>
              ))}
            </form>
          </div>
        ) : (
          <></>
        )}
        <div className="product-search-item">
          <form>
            <p className="p-title">Category</p>
            {CATEGORY?.map((tr) => (
              <>
                <input
                  type="radio"
                  className="p-category"
                  name="category"
                  value={tr.value}
                />
                <label for="category">{tr.label}</label>
                <br />
              </>
            ))}
          </form>
        </div>
        <div className="product-search-item">
          <form>
            <p className="p-title">Trademark</p>
            {TRADEMARK.map((tr) => (
              <div>
                <input
                  type="radio"
                  className="p-category"
                  name="trademark"
                  value={tr.value}
                />
                <label for="trademark">{tr.label}</label>
              </div>
            ))}
          </form>
        </div>
        <div className="product-search-item">
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
        {displayForm && !name ? (
          <ProductAddForm
            isUpdate={isUpdate}
            dataUpdate={dataUpdate}
            setDisplayForm={setDisplayForm}
          />
        ) : (
          <div className="product-list">
            {data?.map((d) => (
              <CardItem
                style={{ margin: "20px" }}
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
        )}
      </div>
    </div>
  );
}

export default ProductPage;
