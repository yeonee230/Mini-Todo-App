import React, { useEffect, useState } from "react";

import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodosFromLocalStorage);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleDel = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDel}
          />
        ))}
      </ul>
      <TodoForm onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }

  return todos.filter((todo) => todo.status === filter);
}

function readTodosFromLocalStorage () {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
