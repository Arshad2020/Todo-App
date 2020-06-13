import React from "react";
import "./style/styles.scss";

function FilterButtons({
  todos,
  activeTodoCount,
  setFilter,
  completedTodosCount,
  removeCompletedItem,
}) {
  return (
    <div>
      {todos.length > 0 && (
        <div className="box-shadow">
          <div className="filter-left-row">
            <span className="items-count">
              {activeTodoCount === 1
                ? `${activeTodoCount} item remain`
                : `${activeTodoCount} items remain`}
            </span>

            <div className="filter-buttons">
              <button onClick={() => setFilter("")}>All</button>
              <button onClick={() => setFilter("completed")}>Completed</button>
              <button onClick={() => setFilter("active")}>Active</button>
            </div>
          </div>

          {completedTodosCount > 0 && (
            <div className="clear-button">
              <button onClick={removeCompletedItem}>
                Clear Completed Tasks
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default FilterButtons;
