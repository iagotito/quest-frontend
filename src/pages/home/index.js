import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './styles.css';

const Home = () => {
    const history = useHistory();

    if (localStorage.getItem('@quest/user-jwt') === 'null') {
        history.push('/welcome')
    }

    function handleLogout(e) {
        e.preventDefault();
        localStorage.setItem('@quest/user-jwt', 'null');
        history.push('/welcome')
    }

    return (
        <div className="welcome-div">
            <h1>Quest Welcome page</h1>
            <br/>
            <Link to='/dashboard'>
                <Button id='see-dashboard-btn'>See quests dashboard</Button>
            </Link>
            <Button id='logout' onClick={handleLogout}>Logout</Button>
        </div>
    )
};

export default Home;