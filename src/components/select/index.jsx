import React from 'react';
import './styles.css';

const Select = ({ label, name, defaultSelect, onChange = () => {}, options }) => (
  <div className="field">
    <label htmlFor={name}>{label}</label>
    <select name={name} id="form-select-input" onChange={onChange}>
      {options.map((value, index) => (
        <option
          key={index}
          selected={value === defaultSelect ? true : false}
          value={value
            .normalize('NFD')
            .replace(/[^a-zA-Zs]/g, '')
            .toLowerCase()}>
          {value}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
