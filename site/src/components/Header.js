import React from 'react'
import logo from '../images/headerLogo.png';

const Header = () => {
    return (
        <div className='header-main'>
            <img className='header-logo' src={logo} alt='Power Co'/>
            <div className='navBar'>
                <h2 className='selected'><a href="#">Home</a></h2>
                <h2 className=''><a href="#">Our Mission</a></h2>
                <h2 className=''><a href="#">Reach Out</a></h2>
                <h2 className=''><a href="#">Volunteer</a></h2>
            </div>
        </div>
    );
}

export default Header;