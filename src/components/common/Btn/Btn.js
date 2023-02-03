import React from "react";

export default function Btn({ title, action }) {
  return (
    <div className="btn_container" onClick={action}>
      {title}
    </div>
  );
}
