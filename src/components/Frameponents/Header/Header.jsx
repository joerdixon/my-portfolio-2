// Import React
import React from "react";
import './Header.css'
import Navigation from './Navigation/Navigation'

function Header() {
    return (
    <div className='header-container'>
        <h1 className='hero-title'>Joe Dixon</h1>
        <Navigation />
    </div>
    )
}

export default Header;
