import React, { useState} from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Button, InputGroup, FormControl, ListGroup, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import "../style.css";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const handleAddTodo = () => {
    if (newTodo && newTodo !== "" && !todos.includes(newTodo)) {
      let allTodos = [...todos];
      allTodos.push(newTodo);
      setTodos(allTodos);
    }
  }
  
  const handleRemoveTodo = (index) => {
    let allTodos = [...todos];
    allTodos.splice(index, 1);
    setTodos(allTodos);
  }

  return(
    <div>
      <Container>
        <h1>Quest</h1>
        <Button className="mb-3" variant="primary" size="md" block> Sign Up </Button>

        <InputGroup className="mb-3">
          <FormControl className="mb-3" placeholder="Todo" onChange={e => setNewTodo(e.target.value.trim())}/>
          <Button className="mb-3" onClick={handleAddTodo}>Add todo</Button>
        </InputGroup>

        <ListGroup>
          {todos.map((currentTodo, index) => (
            <ListGroup.Item key={index}>
              <ButtonToolbar className="justify-content-between" aria-label="Toolbar with button groups">
                <span>{currentTodo}</span>
                <ButtonGroup className="mr-3"size="sm" aria-label="First group">
                  <Button className="mr-2" onClick={() => handleRemoveTodo(index)}> Remove </Button>
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