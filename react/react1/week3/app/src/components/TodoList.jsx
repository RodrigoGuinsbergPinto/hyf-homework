import Todo from "./Todo";
import Border from "./Border";

function TodoList(props) {
  const { todos, handleDelete } = props;

  return (
    <ul>
      {todos.map((item) => (
        <Border key={item.id}>
          <Todo
            todo={item}
            key={item.id}
            id={item.id}
            description={item.description}
            deadline={item.deadline}
            handleDelete={handleDelete}
          />
        </Border>
      ))}
    </ul>
  );
}

export default TodoList;
