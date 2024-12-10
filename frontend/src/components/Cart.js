import React from 'react';

const Cart = ({ cart, setCart }) => {
    const removeFromCart = (productId) => {
        // Update cart by filtering out the product with the given ID
        setCart(prevCart => prevCart.filter(product => product._id !== productId));
    };

    const buyNow = (product) => {
        // Implement buy now functionality (e.g., navigate to checkout)
        console.log(`Proceeding to buy: ${product.name}`);
        // You might want to navigate to a checkout page or similar
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items-container"> {/* Container for cart items */}
                    <ul>
                        {cart.map(product => (
                            <li key={product._id} className="cart-item">
                                <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} /> {/* Display product image */}
                                <h3>{product.name}</h3>
                                <p>Price: ${Number(product.price).toFixed(2)}</p>
                                <div className="cart-item-buttons">
                                    <button onClick={() => removeFromCart(product._id)}>Remove</button> {/* Remove button */}
                                    <button onClick={() => buyNow(product)}>Buy Now</button> {/* Buy Now button */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Cart;