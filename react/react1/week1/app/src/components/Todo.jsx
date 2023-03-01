function Todo(props) {
  const { todo } = props;

  return (
    <li>
      {todo.description}, {todo.deadline}
    </li>
  );
}

export default Todo;
