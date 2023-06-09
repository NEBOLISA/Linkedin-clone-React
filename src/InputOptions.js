import React from "react";
import "./Styles/InputOptions.css";

function InputOptions({ Icon, title, color }) {
  return (
    <div className="inputoptions">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOptions;
