import React, { useState, useEffect } from 'react';
import './styles.css';

const InputTags = ({ label, name, interests, setInterests, inputs }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value.includes(',')) {
      const tags = value
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag !== '');
      setInterests(tags);
    } else {
      setInterests([]);
    }
  }, [setInterests, value]);

  const removeInterests = (index) => {
    interests.splice(index, 1);
    setValue(interests.join());
  };

  return (
    <div>
      <div className="field">
        <label htmlFor={name}>{label}</label>

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
