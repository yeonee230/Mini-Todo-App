import React, { useState } from "react";


export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "aaa" },
    { id: "124", text: "bbb" },
  ]);
  return <section>
    <ul>
        {todos.map( todo => (
            <li key={todo.index}>{todo.text}</li>
        ))}
    </ul>

  </section>;
}
