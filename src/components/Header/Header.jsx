import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {
        logOut()
            .then(result => {})
            .catch(error => console.log(error.massage))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className=''>
                <Link to="/">Shop</Link>
                <Link to="/order Review">Order Review</Link>
                <Link to="/manage inventory">Manage Inventory</Link>
                <Link to="login">Login</Link>
                <Link to="sign-up">Sign Up</Link>
                {user && <span className='text-white'>Welcome {user.email} <button onClick={handleLogout}>Log Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;