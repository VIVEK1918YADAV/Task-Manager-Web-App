import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav>
            <h1>Task Manager</h1>
            {user ? (
                <div>
                    <span>{user.name}</span>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
