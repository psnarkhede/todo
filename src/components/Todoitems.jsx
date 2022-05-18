import React from "react";
import "./Todoitems.css";

export const Todoitems = (props) => {
  const [isCompleted, setIsCompleted] = React.useState(props.items.isCompleted);
  return (
    <div className="items" key={props.items.id}>
      <input
        type="checkbox"
        className="cbox"
        onChange={(e) => {
          setIsCompleted(e.target.checked);
          console.log(e.target.checked);
        }}
      />

      
      <p className={isCompleted ? "striked" : ""}>{props.items.value}</p>
    </div>
  );
};
