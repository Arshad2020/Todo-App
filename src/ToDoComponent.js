import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import "./style/styles.scss";
function ToDoComponent({ todo, handleState, handleRemove }) {
  const completedStyle = {
    color: "#cdcdcd",
    fontStyle: "italic",
    textDecoration: "line-through",
  };

  let today = new Date();

  const dateFormat = (date) => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).toLocaleString("default", { month: "long" });
    const day = new Date(date).getDate();
    const time = today.getHours() + ":" + today.getMinutes();
    return `${month} ${day} - ${year} - ${time}`;
  };
  return (
    <div className="todo-container">
      <div className="todo-item">
        <Checkbox
          className="check-box"
          icon={<CircleUnchecked fontSize="small" />}
          checkedIcon={<CircleCheckedFilled fontSize="small" />}
          name="checkedI"
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleState(todo.id)}
        />
        <div className="todo-row-left">
          <p
            className="todo-title"
            style={todo.completed ? completedStyle : null}
          >
            {todo.text}
          </p>
          <p className="todo-date">{dateFormat(today)}</p>
        </div>
      </div>
      <div className="todo-bin">
        <FontAwesomeIcon icon={faTimes} onClick={() => handleRemove(todo.id)} />
      </div>
    </div>
  );
}

export default ToDoComponent;
