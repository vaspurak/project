import { useState } from "react";
import React from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handlerSubmit = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="Enter your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit Button</button>
      </form>
    </div>
  );
}

export default TodoForm;
