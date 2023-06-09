import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from './TodoForm.module.css'

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSumit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;

    onAdd({ id: uuidv4(), text, status:"active" });
    setText(""); //text 값을 "" 로 만든다. (위의 useState 확인)
  };

  return (
      <form onSubmit={handleSumit} className={styles.form}>
        <input
          type="text"
          placeholder="할일을 입력하세요."
          name="toDo"
          value={text}
          onChange={handleChange}
          className={styles.input}
        />
        <button className={styles.button}>추가</button>
      </form>
  );
}
