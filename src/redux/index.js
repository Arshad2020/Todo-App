import { combineReducers, createStore } from "redux";

export function addTodos(todo) {
  return {
    type: "ADD_TODOS",
    payload: todo,
  };
}
export function toggleTodo(id) {
  return {
    type: "TOGGLE_TODO",
    payload: id,
  };
}

export function removeTodo(id) {
  return {
    type: "REMOVE_TODO",
    payload: id,
  };
}
export function removeCompletedTodo() {
  return {
    type: "REMOVE_COMPLETED_TODO",
  };
}
export function handleInputTodo(value) {
  return {
    type: "HANDLE_INPUT_TODO",
    payload: value,
  };
}
const initialState = {
  todoTask: {
    id: null,
    completed: false,
    text: "",
  },
  todos: [],
};

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "HANDLE_INPUT_TODO":
      return {
        ...state,
        todoTask: {
          ...state.todoTask,
          id: state.todos.length + 1,
          text: action.payload,
        },
      };
    case "ADD_TODOS":
      return {
        ...state,
        todoTask: { ...state.todoTask, text: "" },
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return { ...state, todos: updatedTodos };
    case "REMOVE_TODO":
      const deleteTodo = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos: deleteTodo };
    case "REMOVE_COMPLETED_TODO":
      const deleteAllCompleted = state.todos.filter((todo) => !todo.completed);
      return { ...state, todos: deleteAllCompleted };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  combinedTodos: todosReducer,
});
const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));
export default store;
