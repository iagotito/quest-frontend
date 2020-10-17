import React from "react";

import Routes from './routes';

import Header from './components/Header'
import Home from './pages/dashboard'
import Dashboard from './pages/dashboard'

const App = () => (
    <div className='App'>
        <Header />
        <Routes />
    </div>
);

export default App;