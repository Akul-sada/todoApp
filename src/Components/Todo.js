import React from "react";
import "../App.css";

export const Todo = () => {
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          <div className="todo">
            <li className="todo-item">add</li>
            <button className="complete-btn">
              <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn">
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};
