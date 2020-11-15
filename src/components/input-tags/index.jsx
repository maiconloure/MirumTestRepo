import React, { useState, useEffect } from "react";
import "./styles.css";

const InputTags = ({ label, name, inputs }) => {
  const [interests, setInterests] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value.includes(",")) {
      const tags = value.split(",").map((tag) => tag.trim());
      setInterests(tags);
    }
  }, [value]);

  const removeInterests = (index) => {
    interests.splice(index, 1);
    setValue(interests.join());
  };
  return (
    <div>
      <div className="field">
        <label htmlFor="tags">Interesses</label>

        {inputs.map(({ name, placeholder }, index) => (
          <input
            id="default"
            key={index}
            name={name}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ))}
      </div>

      <div className="interests-list">
        {interests.map((value, index) => (
          <div id="tag" key={index}>
            {value}
            <p onClick={() => removeInterests(index)}>X</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputTags;
