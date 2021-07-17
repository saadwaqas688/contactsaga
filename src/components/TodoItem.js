import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TodoItem = ({ todo, deleteTodos, getTodo }) => {
  return (
    <>
      <button onClick={() => deleteTodos(todo._id)}>delete</button>
      <button onClick={() => getTodo(todo._id)}>getsingle</button>
      <Link to={`/edit/${todo._id}`}>
        <span>Edit</span>
      </Link>

      <div>{todo.name}</div>
      <div>{todo.email}</div>
      <div> {todo.phone}</div>
      <div> {todo.gender}</div>
      <div>{todo.status}</div>
      <div>{todo.job ? "Employed" : "Unemployed"}</div>
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
