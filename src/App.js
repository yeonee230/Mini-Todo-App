import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={
          setFilter
          /* (filter) => setFilter(filter) 전달하는 인자값과 호출하는 값이 같으니 함수의 참조값만 적어도 된다?*/
        }
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
