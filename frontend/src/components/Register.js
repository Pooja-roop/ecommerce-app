import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.post('http://localhost:5000/api/users/register', {
                username,
                email,
                password,
            });
            setSuccess("Registration successful!");

            // Redirect to login page after successful registration
            navigate('/login');
        } catch (error) {
            console.error(error);
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div id="register" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="register-box">
                <h2>Register</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            placeholder="Username" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Email" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password" 
                            type="password" 
                            required 
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;