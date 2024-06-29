import React from "react";

export default function Item({ title, completed }) {
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" checked={completed} />
      <p>{title}</p>
    </div>
  );
}
