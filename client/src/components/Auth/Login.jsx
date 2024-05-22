import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prepare data for the POST request
        const data = {
            email: email,
            password: password
        };

        try {
            // Make a POST request to localhost:5000
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            // Assuming the response contains a token upon successful login
            const token = await response.json();

            // Call the login function with the token
            login(token);
        } catch (error) {
            console.error('Error logging in:', error.message);
            // Handle error, such as displaying an error message to the user
        }
    };

    
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
