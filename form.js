function ToDoForm({addToDo}) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add ToDo..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
