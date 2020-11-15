import React, { useState } from "react";
import "./styles.css";

const Field = ({
  label,
  name,
  id = "default",
  onChange = () => {},
  inputs,
}) => {
  const [inputError, setInputError] = useState(false);

  const validInput = (evt, rule) => {
    if (evt.target.value.match(rule)) {
      setInputError(false);
    } else {
      setInputError(true);
    }
  };

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {inputs.map(({ name, placeholder, rule }, index) => (
        <React.Fragment key={index}>
          {rule ? (
            <div>
              <input
                onChange={(evt) => validInput(evt, rule)}
                id={id}
                name={name}
                type="text"
                placeholder={placeholder}
              />
              {inputError && (
                <p id="input-error">
                  {label} deve conter apenas caracteres alfabéticos e não deve
                  exceder 20 caracteres.
                </p>
              )}
            </div>
          ) : (
            <input id={id} name={name} type="text" placeholder={placeholder} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Field;
