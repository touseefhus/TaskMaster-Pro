import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <div>
      <NewTask onAdd={onAdd} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
