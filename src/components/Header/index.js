import React from 'react';

import './styles.css';

const Header = () => {

    const handleSignUp = () => {
        console.log('sign up');
    }

    return(
        <div id='main-header'>
            <div id='title-div'>QUEST ACCEPTED!</div>
            <div id='user-info-div'>
                <button id='sign-up-btn' onClick={handleSignUp}>Sign up</button>
            </div>
        </div>
    )
}

export default Header;
