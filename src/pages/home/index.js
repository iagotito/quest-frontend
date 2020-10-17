import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
  return(
    <div>
      <h1>Quest home page</h1>
      <br></br>
      <Link to='/dashboard'>
        <Button id='see-dashboard-btn'>See quests dashboard</Button>
      </Link>
    </div>
  )
};

export default Home;