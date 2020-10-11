import React, { useState} from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Button, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import "../style.css";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  let handleAddTodo = () => {
    if (newTodo && newTodo !== "" && !todos.includes(newTodo)) {
      let allTodos = [...todos];
      allTodos.push(newTodo);
      setTodos(allTodos);
    }
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
              <span>{currentTodo}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
        
      </Container>
    </div>
  )
};

export default withRouter(Dashboard);