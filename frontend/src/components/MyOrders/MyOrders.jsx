import React, { useState, useEffect } from "react";
import "./MyOrders.css";
import orderService from "../../services/OrderService";
import OrderItem from "../OrderItem/OrderItem";
import { loadingState } from "../../recoil/LoadingState";
import { useSetRecoilState } from "recoil";

function MyOrders(props) {
  const { admin } = props;
  const [isClickPopup, setIsClickPopup] = useState(false);
  const [orders, setOrders] = useState([]);
  const setLoading = useSetRecoilState(loadingState);

  const getOrders = async () => {
    setLoading(true);
    const res = await orderService.getOrders();
    setOrders(res.data);
    setLoading(false);
  };

  const lengthPending = () => {
    return orders?.reduce((sum, { status }) => {
      if (status == "00") {
        return sum + 1;
      } else return sum;
    }, 0);
  };

  useEffect(() => {
    getOrders();
  }, [isClickPopup]);

  return (
    <div className="order">
      {(lengthPending() == 0 && admin) || orders?.length == 0 ? (
        <p
          style={{
            fontSize: "200%",
            fontWeight: "500",
            textAlign: "center",
            color: "var(--grey-color)",
          }}
        >
          It is empty
        </p>
      ) : admin ? (
        <>
          {orders.map((order) => {
            if (order?.status == "00") {
              return (
                <OrderItem
                  isClickPopup={isClickPopup}
                  setIsClickPopup={setIsClickPopup}
                  order={order}
                  admin={admin}
                />
              );
            }
          })}
        </>
      ) : (
        <>
          {orders.map((order) => (
            <OrderItem
              order={order}
              isClickPopup={isClickPopup}
              setIsClickPopup={setIsClickPopup}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default MyOrders;
