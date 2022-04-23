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

    const [comp,setComp] = React.useState('')

    const handleClick = event =>{
        //console.log(event.target.name);
        setComp(event.target.name);
    }
    
    return (<Router>
        <div className='navbar'>

            <div><Link to='/' className={comp==='home' ? 'active':''} href="#" name='home' onClick={handleClick}><FontAwesomeIcon icon={faHome} />  Home</Link></div>
            <div><Link to='/search' className={comp==='search' ? 'active':''} href="#" name='search' onClick={handleClick}><FontAwesomeIcon icon={faSearch} />  Search</Link></div>
            <div><Link to='/login' className={comp==='login' ? 'active':''} href="#" name='login' onClick={handleClick}><FontAwesomeIcon icon={faUser} />  Login</Link></div>
            <div><Link to='/contact' className={comp==='contact' ? 'active':''} href="#" name='contact' onClick={handleClick}><FontAwesomeIcon icon={faEnvelope} /> Contact</Link></div>
            <div><Link to='/cart' className={comp==='cart' ? 'active':''} href="#" name='cart' onClick={handleClick}><FontAwesomeIcon icon={faCartArrowDown} />  Cart</Link></div>

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