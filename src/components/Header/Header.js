import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/users/add">Add user</Link>
            </nav>
        </div>
    );
};

export default Header;