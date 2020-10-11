import React, { useState} from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Button, InputGroup, FormControl, ListGroup, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import "../style.css";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const handleAddTodo = () => {
    let currentTodo = {text:newTodo, complete:false};
    if (newTodo && currentTodo.text !== "") {
      let updatedTodos = [...todos];
      updatedTodos.push(currentTodo);
      setTodos(updatedTodos);
    }
  }
  
  const handleRemoveTodo = (index) => {
    let updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  const handleToggleTodo = (index) => {
    let allTodos = [...todos];
    allTodos[index].complete = !allTodos[index].complete;
    setTodos(allTodos);
  }

  return(
    <div>
      <Container>
        <ButtonToolbar className="justify-content-between">
          <h1>Quest</h1>
          <Button className="mb-3" size="md">SignUp</Button>
        </ButtonToolbar>

        <InputGroup className="mb-3">
          <FormControl className="mb-3" placeholder="Todo" onChange={e => setNewTodo(e.target.value.trim())}/>
            <Button className="mb-3" size="sm" onClick={handleAddTodo}>Add Todo</Button>
        </InputGroup>

        <ListGroup>
          {todos.map((currentTodo, index) => (
            <ListGroup.Item key={index}>
              <ButtonToolbar className="justify-content-between">
                <span className="text-concat">
                  {currentTodo.complete ? <s>{currentTodo.text}</s> : currentTodo.text}
                </span>
                <ButtonGroup className="mr-3" size="sm">
                  <Button className="mr-3" onClick={() => handleRemoveTodo(index)}> Remove </Button>
                  <Button className="mr-3" onClick={() => handleToggleTodo(index)}> Toggle </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </ListGroup.Item>
          ))}
        </ListGroup>
        
      </Container>
    </div>
  )
};

export default withRouter(Dashboard);