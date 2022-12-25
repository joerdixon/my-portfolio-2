// Import React
import React from "react";
import Navigation from './Navigation/Navigation'

function Header(props) {
    return (
        <div className='flex justify-between p-5'>
            {/* Nameplate on the left */}
            <h1 className=''>Joe Dixon</h1>
            {/* Navbar */}
            <Navigation view={props.view} setView={props.setView} />
        </div>
    )
}

export default Header;
