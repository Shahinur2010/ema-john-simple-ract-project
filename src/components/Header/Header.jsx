import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                <a href="/order">Order</a>
                <a href="/order Review">Order Review</a>
                <a href="/manage inventory">Manage Inventory</a>
                <a href="login">Login</a>
            </div>
        </nav>
    );
};

export default Header;