import React from "react";

export default function TextArea({ label, placeholder }) {
  return (
    <div className="textarea_container">
      <label className="label">{label}</label>
      {/* <br /> */}
      <textarea className="textarea" placeholder={placeholder}></textarea>
    </div>
  );
}
