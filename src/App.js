import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import FilterButtons from "./FilterButtons";
import "./style/styles.scss";

import {
  addTodos,
  toggleTodo,
  removeTodo,
  removeCompletedTodo,
  handleInputTodo,
} from "./redux";

function App(props) {
  const [filter, setFilter] = useState("");

  const inputRef = useRef(null);

  const handleChange = (event) => {
    const { value } = event.target;
    props.handleInputTodo(value);
  };

  function handleAdd() {
    if (props.todoTask.text.trim() === "") return;
    props.addTodos(props.todoTask);

    inputRef.current.focus();
  }
  function handleRemove(id) {
    props.removeTodo(id);
  }

  function removeCompletedItem() {
    props.removeCompletedTodo();
  }

  function handleState(id) {
    props.toggleTodo(id);
  }
  const activeTodoCount = props.todos.filter(function (todo) {
    return !todo.completed;
  }).length;

  const completedTodosCount = props.todos.filter(function (todo) {
    return todo.completed;
  }).length;

  return (
    <div>
      <h1>Todos</h1>
      <form
        className="todo-list"
        onSubmit={(event) => {
          event.preventDefault();
          handleAdd();
        }}
      >
        <div className="input-box">
          <input
            className="input-editor"
            ref={inputRef}
            type="text"
            id="todo-list"
            name="todo-list"
            value={props.todoTask.text}
            onChange={handleChange}
            placeholder="What needs to be done?"
            autocomplete="off"
          />
        </div>

        {filter === "" && (
          <ToDoList
            todos={props.todos}
            handleState={handleState}
            handleRemove={handleRemove}
          />
        )}
        {filter === "completed" && (
          <ToDoList
            todos={props.todos.filter((todo) => todo.completed)}
            handleState={handleState}
            handleRemove={handleRemove}
          />
        )}
        {filter === "active" && (
          <ToDoList
            todos={props.todos.filter((todo) => !todo.completed)}
            handleState={handleState}
            handleRemove={handleRemove}
          />
        )}
        <FilterButtons
          todos={props.todos}
          activeTodoCount={activeTodoCount}
          setFilter={setFilter}
          completedTodosCount={completedTodosCount}
          removeCompletedItem={removeCompletedItem}
        />
      </form>
      <div className="footer-section">
        <p>Double-click to edit a todo</p>
        <p>Created by Arshad2020</p>
        <p>Part of TodoMVC</p>
      </div>
    </div>
  );
}
const mapStateToProps = (globalState) => {
  return {
    todos: globalState.combinedTodos.todos,
    todoTask: globalState.combinedTodos.todoTask,
  };
};

const mapDispatchToPtops = {
  addTodos: addTodos,
  toggleTodo: toggleTodo,
  removeTodo: removeTodo,
  removeCompletedTodo: removeCompletedTodo,
  handleInputTodo: handleInputTodo,
};

export default connect(mapStateToProps, mapDispatchToPtops)(App);
