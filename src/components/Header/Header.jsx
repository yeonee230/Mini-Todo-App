import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";
import { ImSun } from "react-icons/im";
import { TbMoonFilled } from "react-icons/tb";

export default function Header({ filter, filters, onFilterChange }) {
  const {darkMode, toggleDarkmode} = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkmode}>
        {!darkMode && <TbMoonFilled />}
        {darkMode && <ImSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((item, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === item && styles.selected
              }`}
              onClick={() => onFilterChange(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
