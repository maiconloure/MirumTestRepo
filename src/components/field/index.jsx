import React from "react";
import "./styles.css";

const Field = ({ label, name, id = "default", inputs }) => (
  <div className="field">
    <label htmlFor={name}>{label}</label>
    {inputs.map(({ name, placeholder }, index) => (
      <input
        key={index}
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
      />
    ))}
  </div>
);

export default Field;
