import React from 'react';
import './Navbar.css';

const Navbar = ()=>{
    return (<div className='navbar'>

        <div><a className='active' href="#">Home</a></div>
        <div><a href="#">Search</a></div>
        <div><a href="#">Login</a></div>
        <div><a href="#">Contact</a></div>
        <div><a href="#">About</a></div>

    </div>)
}

export default Navbar;