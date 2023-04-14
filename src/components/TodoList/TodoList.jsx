import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { AiFillDelete } from 'react-icons/ai';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "aaa" },
    { id: "124", text: "bbb" },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleDel = (todos) =>{
    
  }

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" name="check" id="check" />{todo.text}
            <button onClick={handleDel}><AiFillDelete/></button>
            </li>
        ))}
        <TodoForm onAdd={handleAdd} />
      </ul>
    </section>
  );
}
