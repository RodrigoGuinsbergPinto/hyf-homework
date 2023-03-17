import { useState } from "react";

function Todo(props) {
  const { id, description, deadline, handleDelete } = props;

  const [checked, setChecked] = useState(false);
  const [edit, setEditing] = useState(false);
  const [todoDescription, setTodoDescription] = useState(description);

  return (
    <li
      id={id}
      style={{
        textDecoration: checked ? "line-through" : "none",
      }}
    >
      {edit ? (
        <input
          value={todoDescription}
          required
          onChange={(e) => setTodoDescription(e.target.value)}
        />
      ) : (
        <p>{todoDescription}</p>
      )}
      {deadline}
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
      <button
        onClick={() => {
          setEditing(!edit);
        }}
      >
        {edit ? "submit" : "edit"}
      </button>
    </li>
  );
}

export default Todo;
