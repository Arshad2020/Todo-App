import React from "react";
import ToDoComponent from "./ToDoComponent";
import "./style/styles.scss";
function ToDoList({ todos, handleRemove, handleState }) {
  return (
    <div>
      {todos.map((todo) => (
        <ToDoComponent
          key={todo.id}
          todo={todo}
          handleState={handleState}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
}

export default ToDoList;
