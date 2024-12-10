import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom'; // Import useLocation
import { HashLink as LinkHash } from 'react-router-hash-link'; // Import HashLink
import './App.css';
import Register from './components/Register'; 
import Login from './components/Login';
import ProductPage from './components/ProductPage'; 
import Cart from './components/Cart';

function App() {
    const [cart, setCart] = useState([]); // Initialize cart state
    const location = useLocation(); // Get current location

    // Determine if we should show the main content based on the current path
    const shouldShowMainContent = !['/login', '/register', '/products', '/cart'].includes(location.pathname);

    return (
        <div className="App">
            {/* Header with Navigation Buttons */}
            {shouldShowMainContent && (
                <header className="App-header">
                    <img src="/my-image.png" alt="BuzzyBee Logo" className="App-logo" />
                    <h1>BuzzyBee!</h1>

                    {/* Navigation Buttons */}
                    <div>
                        <LinkHash smooth to="/register#register"> {/* Use HashLink for smooth scrolling */}
                            <button>Register</button>
                        </LinkHash>
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                        
                    </div>
                </header>
            )}

            {/* Define Routes */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} /> {/* Registration route */}
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<ProductPage setCart={setCart} cart={cart} />} /> {/* Pass setCart and cart to ProductPage */}
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} /> {/* Pass cart and setCart to Cart */}
            </Routes>
        </div>
    );
}

// Example HomePage component
const HomePage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Welcome to BuzzyBee!</h2>
            {/* Add a section for registration if necessary */}
        </div>
    );
};

export default function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}