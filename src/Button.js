import React from "react";
import ButtonStyles from "./Button.module.css";
const Button = (props) => {
  return (
    <button type={props.type || "button"} className={ButtonStyles.button}>
      {props.children}
    </button>
  );
};
export default Button;
