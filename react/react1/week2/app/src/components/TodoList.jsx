import Todo from "./Todo";

function TodoList(props) {
  const { todos, handleDelete } = props;

  return (
    <ul>
      {todos.map((item) => (
        <Todo
          todo={item}
          key={item.id}
          id={item.id}
          description={item.description}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
