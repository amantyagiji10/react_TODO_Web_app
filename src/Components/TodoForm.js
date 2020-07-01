import React, { useState } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  let [todoString, setTodoString] = useState("");

  const handeleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return toast("TODO cannot be Empty 😔", { type: "error" });
    }
    const todo = {
      todoString,
      id: v4(),
    };

    addTodos(todo);

    setTodoString("");
  };

  return (
    <Form onSubmit={handeleSubmit} className="my-5">
      <ToastContainer></ToastContainer>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter Your TODO Here"
            value={todoString}
            onChange={(e) => {
              setTodoString(e.target.value);
            }}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="info">Add Your TODO</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
