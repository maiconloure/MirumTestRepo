import React from "react";
import "./styles.css";

const Select = ({
  label,
  name,
  defaultSelect,
  onChange = () => {},
  options,
}) => (
  <div className="field">
    <label htmlFor={name}>{label}</label>
    <select name={name} id="form-select-input" onChange={onChange}>
      {options.map((value, index) => (
        <React.Fragment key={index}>
          {value === defaultSelect ? (
            <option
              selected
              value={value
                .normalize("NFD")
                .replace(/[^a-zA-Zs]/g, "")
                .toLowerCase()}
            >
              {value}
            </option>
          ) : (
            <option
              key={index}
              value={value
                .normalize("NFD")
                .replace(/[^a-zA-Zs]/g, "")
                .toLowerCase()}
            >
              {value}
            </option>
          )}
        </React.Fragment>
      ))}
    </select>
  </div>
);

export default Select;
