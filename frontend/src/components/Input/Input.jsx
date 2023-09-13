import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div className="input">
      <label
        className="p-label"
        style={props.disabled ? { color: "#dddddd" } : { color: "black" }}
      >
        {props.label} {props.require && (<i class="require">* </i>)}
      </label>
      <br />
      <input
        type={props.type}
        className="p-input"
        style={props.style}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
