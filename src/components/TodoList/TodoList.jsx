import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "aaa" },
    { id: "124", text: "bbb" },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
        <TodoForm onAdd={handleAdd} />
      </ul>
    </section>
  );
}
