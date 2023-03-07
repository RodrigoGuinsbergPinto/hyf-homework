import { useState } from "react";

function Todo(props) {
  const { id, description, handleDelete } = props;

  const [checked, setChecked] = useState(false);

  return (
    <li
      id={id}
      style={{
        textDecoration: checked ? "line-through" : "none",
      }}
    >
      Todo {id} - {description}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default Todo;
