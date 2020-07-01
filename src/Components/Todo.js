import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import { FaCheckDouble } from "react-icons/fa";

const Todo = ({ todos, markedComplete }) => {
  return (
    <ListGroup className="mb-3">
      {todos.length === 0 ? (
        <h4 className="text-info text-center mt-4 ">
          Your TODO List Is Empty!
          <br />
          Add a TODO Here an Work on That
          <br />
          {/* <span>
            <Spinner type="grow" color="warning" /> Waiting For You To Add TODO
          </span> */}
        </h4>
      ) : (
        <>
          <h3 className="text-warning mb-3 mt-3">Your TODOS List</h3>
          {todos.map((todo) => (
            <ListGroupItem key={todo.id}>
              {todo.todoString}
              <span
                className="float-right"
                onClick={() => markedComplete(todo)}
              >
                <FaCheckDouble color="rgba(83, 224, 188, 0.9)" />
              </span>
            </ListGroupItem>
          ))}
        </>
      )}
    </ListGroup>
  );
};

export default Todo;
