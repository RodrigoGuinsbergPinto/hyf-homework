import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <ol>
      {todos.map((todo, i) => (
        <Todo todo={todo} key={i} />
      ))}
    </ol>
  );
}

export default TodoList;
