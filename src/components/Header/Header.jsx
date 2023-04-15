import React from "react";

export default function Header({ filter, filters, onFilterChange }) {
  return (
    <ul>
      {filters.map((item, index) => (
        <li key={index}>
          <button onClick={() => onFilterChange(item)}>{item}</button>
        </li>
      ))}
    </ul>
  );
}
