import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css'; // Import CSS for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProductPage = ({ setCart, cart }) => {
    const [products, setProducts] = useState([]);
    const [cartStatus, setCartStatus] = useState({}); // Track cart status for each product
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        // Uncomment this part when your API is ready
        /*
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data.map(product => ({
                    ...product,
                    price: Number(product.price) // Ensure price is a number
                })));
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
        */

        // Static product data for testing
        const staticProducts = [
            {
                _id: "1",
                name: "Aldeno Shirt",
                description: "Spread Collar Slim Fit Satin Formal Shirt",
                price: 29.99,
                image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRnuGvFpu4WsV8b0HMfBq4KrLhlyUjuqhjIh5tx3HzhdyPIp3ehjo3Vrqo9PiEj-0u8x-XuTwhRzYo4VcT5LAmTAu8alrGs3Q7KrucgUCiB&usqp=CAc"
            },
            {
                _id: "2",
                name: "Men's Sweater",
                description: "V-neck Pullover Knitwear",
                price: 39.99,
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDQlVjDv_04kdNij8lmfPgqHdJV1TcErYcVrfavT44tchq6UE15UKycBlT6TNoN8tcz70q3PoukL4uoj9erGz7iGsIUR_nuhxHiq3Jw7e_juhXovH5TY_4cw&usqp=CAE"
            },
            {
                _id: "3",
                name: "Men's Watch",
                description: "Croco Leather Watch",
                price: 49.99,
                image: "https://fossil.scene7.com/is/image/FossilPartners/FS6091_main?$sfcc_fos_large$"
            },
            {
                _id: "4",
                name: "Women's Jacket",
                description: "Hooded Crop Jacket ",
                price: 59.99,
                image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8WfLtMSRvWCPAaMj6YO3B2JrAo6CtvOCLC_m1hU6t3CHg0DaomtqI4yR-kpk0j3UV-NTF4OLmU3Nt5y5Id6VM4eINnRKhdQMY13hBd4y2&usqp=CAE"
            },
            {
                _id: "5",
                name: "Bracelet",
                description: "Pearls Bracelet",
                price: 69.99,
                image: "https://isla.ph/cdn/shop/files/Isla-0513_300x300.jpg?v=1698759446"
            },
            {
                _id: "6",
                name: "Vest",
                description: "Vest for Women",
                price: 79.99,
                image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRgy4eIJmcP2SUQRmsn14c6nSqkKT0x6QFOu35WYf5N71Y7i0qOyrQnY-bxtKH3_rAJcHPITJRFB-utxo_1uKawTUiRjpQAb51NF3ZKu4E&usqp=CAE"
            },
            {
                _id: "7",
                name: "Kurta", 
                description: "Kurta for men",
                price: 89.99,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVsrAKdkCSGDy8jpQmq0jf9S2akxMUvRHBA&s"
            },
            {
                _id: "8", 
                name: "Trouser", 
                description: "Pant for Men",
                price: 99.99,
                image: "https://i.pinimg.com/736x/50/59/87/50598755f51a1b577ea98dda968ca837.jpg"
            },
            {
               _id: "9", 
               name: "Sunglasses", 
               description: "Unisex Sunglasses",
               price: 109.99, // Ensure this is a number
               image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTqk8BM67EmxBN-hf7_LBtewY3fbtjjNx3OJHrurfOIQlTJrzqrVeJkkvpTu60PQgPTVt63t_DbSbut-K4ypARUKFwUR2uyjfW4bRhTkkk&usqp=CAE"
           },
           {
               _id: "10", 
               name: "Lehenga", 
               description: "Elegent Lehenga Choli",
               price: 119.99, // Ensure this is a number
               image: "https://i.pinimg.com/736x/68/13/31/68133199aad7b250fabe4b94d3fb98d2.jpg"
           },
           {
               _id: "11", 
               name: "Frock", 
               description: "Red Frock for Women",
               price: 129.99, // Ensure this is a number
               image: "https://i.pinimg.com/474x/d7/9a/31/d79a316303ef4be01633533ed7ea4b7b.jpg"
           },
           {
               _id: "12", 
               name: "Women's Shirt", 
               description: "Formal Shirt for Women",
               price: 139.99, // Ensure this is a number
               image: "https://images.squarespace-cdn.com/content/v1/607cc34ebab4b20ba47a3b97/79c39020-5adf-4909-9e79-77969693f4ae/2024-Money-Aesthetic-Old-Style-Guide"
           }
        ];

        setProducts(staticProducts); // Set static products to state
    }, []);

    const addToCart = (product) => {
        const productWithImage = {
            ...product,
            image: product.image // Include image in the product object
        };
        
        setCart(prevCart => [...prevCart, productWithImage]); // Update cart with new product

        setCartStatus(prevStatus => ({
            ...prevStatus,
            [product._id]: true // Mark as added to cart
        }));
    };

    return (
        <div className="product-list-container"> {/* Container for styling */}
            <h2>Product List</h2>

            {/* View Cart Button */}
            <button onClick={() => navigate('/cart')} className="view-cart-button">
              View Cart ({cart.length})
            </button>

            <div className="product-grid">
               {products.length > 0 ? (
                    products.map(product => (
                        <div className="product-card" key={product._id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${Number(product.price).toFixed(2)}</p> {/* Ensure price is a number and format it */}
                            <button onClick={() => addToCart(product)}>
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

export default ProductPage;