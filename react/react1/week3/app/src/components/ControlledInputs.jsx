import { useState } from "react";

const ControlledInputs = (props) => {
  const { todos, setTodos } = props;

  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const addNewTodo = {
      description,
      deadline,
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    };
    setTodos([...todos, addNewTodo]);
    setDescription("");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <label>Description: </label>
        <input
          type="text"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="input-box">
        <label>Deadline: </label>
        <input
          type="date"
          value={deadline}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <div className="btn-box">
        <button className="add-todo-btn">Add new todo</button>
      </div>
    </form>
  );
};

export default ControlledInputs;
