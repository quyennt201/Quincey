import React from "react";
import "./Input.css";

function Input(props) {
  const {label, disabled, require, type, style, value, onChange} = props
  return (
    <div className="input">
      <label
        className="p-label"
        style={{ color: "black" }}
      >
        {label} {require && (<i class="require">* </i>)}
      </label>
      <br />
      <input
        type={type}
        className="p-input"
        style={style}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
