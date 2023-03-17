import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
// import todosData from "./components/todosData";
import Counter from "./components/Counter";
import ControlledInputs from "./components/ControlledInputs";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      const res = await fetch(
        `https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw`,
        { signal }
      );
      const json = await res.json();
      // console.log(json);
      setTodos(json);
    })();
    return () => {
      // cancel the previous fetch
      controller.abort();
    };
  }, []);
  console.log(todos);

  const handleDelete = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  return (
    <div className="App">
      <Header title="My HYF Todo List" />
      <Counter />
      <ControlledInputs todos={todos} setTodos={setTodos} />

      {todos.length ? (
        <TodoList todos={todos} handleDelete={handleDelete} />
      ) : (
        <h2>There are no Todos!</h2>
      )}
    </div>
  );
}

export default App;
