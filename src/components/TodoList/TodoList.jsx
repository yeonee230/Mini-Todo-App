import React, { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";


export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "aaa" , status: "active"},
    { id: "124", text: "bbb" , status: "active"},
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleDel = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => todo.id === updated.id ? updated : todo));
  }

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id}
          todo={item}
          onUpdate={handleUpdate}
          onDelete={handleDel} />
        ))}
        <TodoForm onAdd={handleAdd} />
      </ul>
    </section>
  );
}
