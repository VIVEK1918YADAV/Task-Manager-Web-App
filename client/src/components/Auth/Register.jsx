import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare data for the POST request
        const data = {
            username: name,
            email: email,
            password: password
        };

        try {
            // Make a POST request to localhost:5000
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const resData = await response.json();
                throw new Error(resData.msg || 'Registration failed');
            }

            const resData = await response.json();

            // Assuming the response contains the token
            const token = resData.token;

            // Optionally, log in the user after successful registration
            if (token) {
                login(token); // Assuming login function stores the token and updates the auth context
            }

            // Set success state
            setSuccess(true);
            setError(null);

        } catch (error) {
            console.error('Error registering:', error.message);
            setError(error.message);
            setSuccess(false);
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            {success && <p>Registration successful! You are now logged in.</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
        </>
    );
};

export default Register;
