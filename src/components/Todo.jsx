import React, { useState } from "react";
import { Todolist } from "./Todolist";
import "./Todoitems.css";

const Todo = () => {
  let [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handlechange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container">
      <div className="upbox">
        <input className="input" value={input} onChange={handlechange} />
        <button
        className="btn"
          onClick={() => {
            todo.push({ id: Date.now(), value: input, isCompleted:false });
            setTodo([...todo]);
            setInput("");
          }}
        >
          Add
        </button>
      </div>

      <div>
        <Todolist tasks={[...todo]} />
      </div>
    </div>
  );
};

export { Todo };
