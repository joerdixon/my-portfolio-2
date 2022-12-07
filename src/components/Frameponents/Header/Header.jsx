// Import React
import React from "react";
import './Header.css'
import Navigation from './Navigation/Navigation'

function Header(props) {
    return (
    <div className='header-container'>
        <h1 className='hero-title'>Joe Dixon</h1>
        <Navigation view={props.view} setView={props.setView} />
    </div>
    )
}

export default Header;
