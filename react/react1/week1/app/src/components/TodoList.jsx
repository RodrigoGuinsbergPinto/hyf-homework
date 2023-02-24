import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <ol>
      {todos.map((todo) => (
        <Todo description={todo.description} deadline={todo.deadline} />
      ))}
    </ol>
  );
}

export default TodoList;
