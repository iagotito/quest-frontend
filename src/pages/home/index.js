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
        <Button className='signin-btn'>Sign in</Button>
      </div>
    </div>
  )
};

export default Home;