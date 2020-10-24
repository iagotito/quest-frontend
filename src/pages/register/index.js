import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory();
    const API_URL = 'http://0.0.0.0:8080'
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function handleSubmit (e) {
        e.preventDefault();

        fetch(API_URL + '/users', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${name}`, 
                email: `${email}`,
                password: `${password}`
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.status_code != 201) {
                alert(data.message);
            } else {
                console.log('user created');
                history.push('/');
            }
        });
    }

    return (
        <>
        <form className="register-div" onSubmit={handleSubmit}>
            KSAKSKSKSAKLJA
            <br/>
            <input type="text" className="name-input" placeholder="name" value={name} onChange={e => setName(e.target.value)}/>
            <br/>
            <input type="text" className="email-input" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <br/>
            <input type="password" className="password-input" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <br/>
            <Button type="submit" onClick={handleSubmit}>Register</Button>
        </form>
        <Link to='/'>
            <Button>Back to home page</Button>
        </Link>
        </>
    );
}

export default Register;
