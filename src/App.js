import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const toDos = ["할일1", "할일2", "할일3","gkfsdf"];
  const [toDo, setToDo] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    console.log(toDo);
    console.log(toDos);
    // toDos.push(toDo);
    toDos = [...toDo, toDo]
    console.log(toDos);
    
  };


  return (
    <div>
   
      <form onSubmit={handleAdd}>
        <input
          type="text"
          name="toDo"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        />
        <button>추가</button>
      </form>
    </div>
  );
}

export default App;
