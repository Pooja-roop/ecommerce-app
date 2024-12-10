import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css'; // Import CSS for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartStatus, setCartStatus] = useState({}); // Track cart status for each product

    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        // Uncomment this part when your API is ready
        /*
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
        */

        // Static product data for testing
        const staticProducts = [
            {
                "_id": "1",
                "name": "Product 1",
                "description": "Description for Product 1",
                "price": 29.99,
                "image": "https://via.placeholder.com/100"
            },
            {
                "_id": "2",
                "name": "Product 2",
                "description": "Description for Product 2",
                "price": 39.99,
                "image": "https://via.placeholder.com/100"
            },
            {
                "_id": "3",
                "name": "Product 3",
                "description": "Description for Product 3",
                "price": 49.99,
                "image": "https://via.placeholder.com/100"
            },
            {
                "_id": "4",
                "name": "Product 4",
                "description": "Description for Product 4",
                "price": 59.99,
                "image": "https://via.placeholder.com/100"
            },
            {
                "_id": "5",
                "name": "Product 5",
                "description": "Description for Product 5",
                "price": 69.99,
                "image": "https://via.placeholder.com/100"
            },
            {
                "_id": "6",
                "name": "Product 6",
                "description": "Description for Product 6",
                "price": 79.99,
                "image": "https://via.placeholder.com/100"
            },
            {
                "_id": "7",
                "name": "Product 7", 
                "description": "Description for Product 7",
                "price": 89.99,
                "image": "https://via.placeholder.com/100"
            },
            {
                "_id": "8", 
                "name": "Product 8", 
                "description": "Description for Product 8",
                "price": 99.99,
                "image": "https://via.placeholder.com/100"
            },
            {
               "_id": "9", 
               "name": "Product 9", 
               "description": "Description for Product 9",
               "price": "109.99",
               "image": "https://via.placeholder.com/100"
           },
           {
               "_id": "10", 
               "name": "Product 10", 
               "description": "Description for Product 10",
               "price": "119.99",
               "image": "https://via.placeholder.com/100"
           },
           {
               "_id": "11", 
               "name": "Product 11", 
               "description": "Description for Product 11",
               "price": "129.99",
               "image": "https://via.placeholder.com/100"
           },
           {
               "_id": "12", 
               "name": "Product 12", 
               "description": "Description for Product 12",
               "price": "139.99",
               "image": "https://via.placeholder.com/100"
           }
        ];

        setProducts(staticProducts); // Set static products to state
    }, []);

    // Function to toggle cart status and add/remove from cart
    const toggleCartStatus = (product) => {
        setCart((prevCart) => {
            if (prevCart.some(item => item._id === product._id)) {
                // If already in cart, remove it
                return prevCart.filter(item => item._id !== product._id);
            } else {
                // If not in cart, add it
                return [...prevCart, product];
            }
        });
        
        setCartStatus((prevStatus) => ({
            ...prevStatus,
            [product._id]: !prevStatus[product._id] // Toggle the cart status
        }));
    };

    return (
        <div className="product-list-container"> {/* Container for styling */}
            {/* View Cart Button */}
            <button onClick={() => navigate('/cart')} className="view-cart-button">
               View Cart ({cart.length})
           </button>
           
            <h2>Product List</h2>
            <div className="product-grid">
               {products.length > 0 ? (
                    products.map(product => (
                        <div className="product-card" key={product._id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${Number(product.price).toFixed(2)}</p> {/* Ensure price is a number and format it */}
                            <button onClick={() => toggleCartStatus(product)}>
                                {cartStatus[product._id] ? 'Added to Cart' : 'Add to Cart'}
                            </button>
                        </div>
                    ))
               ) : (
                    <p>No products available.</p> // Fallback message
               )}
           </div>
       </div>
   );
};

export default ProductList;