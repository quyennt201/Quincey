import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading">
      <div className="loading-item">
        <ReactLoading type="spin" />
      </div>
    </div>
  );
}

export default Loading;
