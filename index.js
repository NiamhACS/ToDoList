function App() {
  const [todos, setToDos] = React.useState([
    {
      text: "learn react",
      isCompleted: false,
    },
    {
      text: "meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "build todo app",
      isCompleted: false,
    },
  ]);

  const addToDo = value => {
    const newToDos = [...todos, {text:value, isCompleted:false}];
    setToDos(newToDos);
  }

  const removeToDo = index => {
    let temp = [...todos];
    temp.splice(index, 1);
    setToDos(temp);
  };

  return (
    <>
      {todos.map((todo, i) => <ToDo key={i} index={i} todo={todo} remove={removeToDo}/>)}
      <ToDoForm addToDo={addToDo}/>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
