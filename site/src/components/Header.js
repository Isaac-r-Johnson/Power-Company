import React from 'react'
import logo from '../images/headerLogo.png';

const Header = (props) => {
    const page = props.page;
    const theStyle = {textDecoration: 'underline'}
    var pageStyling = {
        home: {},
        mission: {},
        reach: {},
        staff: {}
    }
    if (page === ""){
        pageStyling.home = theStyle;
    }
    else if (page === "mission"){
        pageStyling.mission = theStyle;
    }
    else if (page === "reach"){
        pageStyling.reach = theStyle;
    }
    else if (page === "staff"){
        pageStyling.staff = theStyle;
    }
    else{
        console.log("Error!");
    }
    
    return (
        <div className='header-main'>
            <img className='header-logo' src={logo} alt='Power Co'/>
            <div className='navBar'>
                <h2 style={pageStyling.home}><a href="/">Home</a></h2>
                <h2 style={pageStyling.mission}><a href="/mission">Our Mission</a></h2>
                <h2 style={pageStyling.reach}><a href="/reach">Reach Out</a></h2>
                <h2 style={pageStyling.volunteer}><a href="/staff">Staff</a></h2>
            </div>
        </div>
    );
}

export default Header;