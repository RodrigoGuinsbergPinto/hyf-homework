import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import todosData from "./components/todosData";
import Counter from "./components/Counter";

function App() {
  const [todos, setTodos] = useState(todosData);

  const handleDelete = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  return (
    <div className="App">
      <Header title="My HYF Todo List" />
      <Counter />

      {todos.length ? (
        <TodoList todos={todos} handleDelete={handleDelete} />
      ) : (
        <h2>There are no Todos!</h2>
      )}

      <button
        onClick={() =>
          setTodos([
            ...todos,
            {
              id: todos.length ? todos[todos.length - 1].id + 1 : 1,
              description: "New random todo.",
            },
          ])
        }
      >
        Add new Todo
      </button>
    </div>
  );
}

export default App;
