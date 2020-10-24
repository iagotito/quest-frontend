import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return(
    <div className="home-div">
      <h1>Quest home page</h1>
      <br/>
      <Link to='/dashboard'>
        <Button id='see-dashboard-btn'>See quests dashboard</Button>
      </Link>
      <br/><br/>
      <div className="buttons">
        <Link to='/register'>
          <Button className='register-btn'>Register</Button>
        </Link>
        <Link to='/login'>
          <Button className='login-btn'>Login</Button>
        </Link>
      </div>
    </div>
  )
};

export default Home;