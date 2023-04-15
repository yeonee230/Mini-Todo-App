import React from "react";
import { AiFillDelete } from "react-icons/ai";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li>
      <input
        type="checkbox"
        id="check"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="check">{text}</label>
      <button onClick={handleDelete}>
        <AiFillDelete />
      </button>
    </li>
  );
}
