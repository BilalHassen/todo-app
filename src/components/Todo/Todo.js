import "./Todo.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
function Todo({ task }) {
  return (
    <>
      <div className="todo">
        <p className="todo__text">{task.task}</p>
        <div className="todo__icon-container">
          <FontAwesomeIcon icon={faPenToSquare} className="todo__edit-icon" />
          <FontAwesomeIcon icon={faTrashCan} className="todo__delete-icon" />
        </div>
      </div>
    </>
  );
}

export default Todo;
