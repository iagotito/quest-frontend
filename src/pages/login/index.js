import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

const Login = () => {
    const history = useHistory();
    const API_URL = 'http://0.0.0.0:8080'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        fetch(API_URL + '/auth/login', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: `${email}`,
                password: `${password}`
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.status_code !== 200) {
                alert(data.message);
                return;
            }
            localStorage.setItem('@quest/user-jwt', data.data.jwt);
            history.push('/');
        })
    }

    return (
        <>
        <form className="login-form" onSubmit={handleSubmit}>
            <br/>
            <input type="text" className="email-input" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <br/>
            <input type="password" className="password-input" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <br/>
            <Button type="submit" onClick={handleSubmit}>Login</Button>
        </form>
        <div className="home-btn">
            <Link to='/'>
                <Button>Back to home page</Button>
            </Link>
        </div>
        </>
        
    );
}

export default Login;