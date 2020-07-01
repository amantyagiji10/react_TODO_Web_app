import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imagetodo from "./img/imgtodo.png";
function App() {
  const [todos, setTodos] = useState([]);
  // const [checkTrue, setCheckTrue] = useState("false");
  let check = false;
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    // console.log({ localStorage });

    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const markedComplete = (todoDel) => {
    //
    if (todos.length === 1) {
      toast(`Congratulation "${todoDel.todoString}" was Your Last TODO 😀 `, {
        type: "success",
      });
    } else {
      toast(`Congratulation for completing TODO "${todoDel.todoString} 😀"`, {
        type: "info",
      });
    }
    setTodos(todos.filter((todo) => todo.id !== todoDel.id));
  };

  const addTodos = async (todo) => {
    if (todos.length !== 0) {
      for (let i = 0; i < todos.length; ) {
        if (todo.todoString === todos[i].todoString) {
          check = true;
          break;
        } else {
          // check = false
          i++;
        }
      }
    }

    // console.log(check);
    // console.log(hello);

    if (check) {
      toast(`TODO "${todo.todoString}" is Already Present 😅`, {
        type: "warning",
      });
      return (check = false);
    } else {
      setTodos([...todos, todo]);
      toast(
        `TODO Added to Your List, Time To Work On "${todo.todoString}"  😀`,
        {
          type: "info",
        }
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="outer_div">
      <div className="head_div">
        <h1 className="text-center text-danger" style={{ padding: "20px" }}>
          ADD YOUR TODOS HERE
        </h1>
      </div>
      <Container fluid>
        <Row className="mt-5">
          <Col md={12} lg={6} sm={12}>
            <img src={imagetodo} style={{ width: "100%" }} alt="" />
          </Col>
          <Col md={12} lg={6} sm={12}>
            <Col md={12} lg={12} sm={12}>
              <TodoForm addTodos={addTodos} />
            </Col>
            <Col
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              md={12}
              lg={12}
              sm={12}
            >
              <Todo todos={todos} markedComplete={markedComplete}></Todo>
            </Col>
          </Col>
        </Row>
      </Container>
      <div
        className="text-center last_div "
        style={{ padding: "25px", marginTop: "20px" }}
      >
        <h1 className="text-danger">&copy; Aman Tyagi</h1>
        <span className="text-center">
          Developer Mail:
          <a className="text-danger" href="mailto:tyagi.aman070@gmail.com">
            tyagi.aman070@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
