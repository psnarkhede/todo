import React from "react";
import "./Todoitems.css";

export const Todoitems = (props) => {
  const [isCompleted, setIsCompleted] = React.useState(props.items.isCompleted);
  return (
    <div className="items" key={props.items.id}>
      <div className="div">
        <input
          type="checkbox"
          className="cbox"
          onChange={(e) => {
            setIsCompleted(e.target.checked);
          }}
        />
      </div>

      <div className="div1">
        <p className={isCompleted ? "striked" : ""}>{props.items.value}</p>
      </div>

      <div className="div">
        <button
          className="delete"
          onClick={() => props.deletetodo(props.items.value)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
