import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                <Link to ="/">Shop</Link>
                <Link to ="/order Review">Order Review</Link>
                <Link to ="/manage inventory">Manage Inventory</Link>
                <Link to ="login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;