import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './styles.css';

const Welcome = () => {
  const history = useHistory();

  if (localStorage.getItem('@quest/user-jwt') !== 'null') {
    history.push('/home');
  }

  return(
    <div className="buttons">
      <Link to='/register'>
        <Button className='register-btn'>Register</Button>
      </Link>
      <Link to='/login'>
        <Button className='login-btn'>Login</Button>
      </Link>
    </div>
  )
};

export default Welcome;
