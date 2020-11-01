import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className="not-found-div">
            <h1>404 Error: the page you are looking for does not exists</h1>
            <br/>
            <Link to='/'>
                <Button>Back to Home page</Button>
            </Link>
        </div>
    )
};

export default NotFound;