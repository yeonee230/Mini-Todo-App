import React, { useState } from "react";

import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: "123", text: "aaa", status: "active" },
    { id: "124", text: "bbb", status: "completed" },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleDel = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  const filtered = getFilteredItems(todos, filter);
  return (
    <section>
      <ul>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDel}
          />
        ))}
        <TodoForm onAdd={handleAdd} />
      </ul>
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }

  return todos.filter((todo) => todo.status === filter);
}
