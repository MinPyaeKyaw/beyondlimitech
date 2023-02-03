import React from "react";

export default function Input({ placeholder, label }) {
  return (
    <div className="input_container">
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type="text"
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
}
