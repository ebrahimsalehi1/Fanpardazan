import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUser, faEnvelope, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Site/Home';
import Search from '../Site/Search';
import Login from '../Site/Login';
import Contact from '../Site/Contact';
import Cart from '../Site/Cart';

const Navbar = () => {
    return (<Router>
        <div className='navbar'>

            <div><a className='active' href="#"><Link to='/'><FontAwesomeIcon icon={faHome} />  Home</Link></a></div>
            <div><a href="#"><Link to='/search'><FontAwesomeIcon icon={faSearch} />  Search</Link></a></div>
            <div><a href="#"><Link to='/login'><FontAwesomeIcon icon={faUser} />  Login</Link></a></div>
            <div><a href="#"><Link to='/contact'><FontAwesomeIcon icon={faEnvelope} /> Contact</Link></a></div>
            <div><a href="#"><Link to='/cart'><FontAwesomeIcon icon={faCartArrowDown} />  Cart</Link></a></div>

        </div>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>

    </Router>)
}

export default Navbar;