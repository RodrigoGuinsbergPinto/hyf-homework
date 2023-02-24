// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const todos = [
    {
      description: "React",
      deadline: "Fri March 24 2023",
    },
    {
      description: "Meal Sharing",
      deadline: "Fri March 31 2023",
    },
    {
      description: "Final Project",
      deadline: "Fri Jun 02 2023",
    },
  ];
  return (
    <div className="App">
      <Header title={"My HYF Todo List"} />
      <h3>Deadlines:</h3>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
