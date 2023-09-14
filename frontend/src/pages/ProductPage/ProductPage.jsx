import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Slider } from "antd";
import "./ProductPage.css";
import CardItem from "../../components/Card/CardItem";
import productService from "../../services/ProductService";
import ProductAddForm from "../../components/AddForm/ProductAddForm";
import { CATEGORY, TRADEMARK, TYPE } from "../../datas/DATA";
import { loadingState } from "../../recoil/LoadingState";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { popupReload } from "../../recoil/PopupState";

function ProductPage() {
  const name = useParams().name || "";

  const [data, setData] = useState([]);
  const [displayForm, setDisplayForm] = useState(false); // display the information filling form
  const [dataUpdate, setDataUpdate] = useState({});
  const [isUpdate, setIsUpdate] = useState(false); // false - form update && true - form add new
  const [valueSliderMin, setValueSliderMin] = useState(0); // value min of price in search
  const [valueSliderMax, setValueSliderMax] = useState(100); // value max of price in search

  const setLoading = useSetRecoilState(loadingState);
  const isReload = useRecoilValue(popupReload)

  const onChange = (value) => {
    setValueSliderMin(value[0]);
    setValueSliderMax(value[1]);
  };

  const getData = async () => {
    setLoading(true);
    let res = {};
    if (name) {
      res = await productService.getProductByName(name);
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
  }, [name, displayForm, isReload]);

  return (
    <div className="product">
      {!name && (
        <div className="product-add">
          <button
            className={displayForm ? "product-list-btn" : "product-add-btn"}
            onClick={() => {
              setDisplayForm(!displayForm)
              setIsUpdate(false)
              setDataUpdate({})
            }}
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
            isUpdate={isUpdate}// true-form update || false-form add new
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
