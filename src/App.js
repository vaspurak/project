import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newItem = {
      text,
      isComplуted: false,
      id: Date.now(),
    };
    setTodos([...todos, newItem]);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
