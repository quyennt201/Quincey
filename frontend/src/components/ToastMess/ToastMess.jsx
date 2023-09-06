import React from "react";
import "./ToastMess.css";

function ToastMess(props) {
  const { type } = props;

    setTimeout(() => {
        props?.setToastMess(false)
        // props?.setDisplayForm(false)
    }, 1000);

  return (
    <div class="toast-box" style={props.style}>
      <div class={`toast-item toast-item-${type}`}>
        <div class="toast-icon">
          {type=="error" && <i class="fas fa-exclamation-triangle"></i>}
          {type=="warning" && <i class="fas fa-exclamation-circle"></i>}
          {type=="success" && <i class="fas fa-check-circle"></i>}
          {type=="info" && <i class="fas fa-info-circle"></i>}
        </div>
        <div class="toast-text">{props.txt}</div>
        {/* <div class="toast-close">
          <i class="fas fa-times"></i>
        </div> */}
      </div>
    </div>
  );
}

export default ToastMess;
