import "./App.css";

function App() {
  const toDos = ["할일1", "할일2", "할일3"];

  // const handleAddClick = () =>{

  // }
  return (
    <div>
      <h1> 할일 목록 </h1>
      <ul>
        {toDos.map((toDo, index) => {
          return (
            <li key={index}>
              {toDo} <button>삭제</button>
            </li>
          );
        })}
      </ul>
      <form>
        <input type="text" />
        {/* <button onClick={handleAddClick}>추가</button> */}
      </form>
    </div>
  );
}

export default App;
