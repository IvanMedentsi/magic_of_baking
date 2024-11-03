import PropTypes from 'prop-types'; 
import React, { createContext, useContext, useState } from 'react';


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

   
    const addToCart = (item) => {
        const uniqueItem = { ...item, uniqueId: Date.now() }; 
        setCartItems((previousItems) => [...previousItems, uniqueItem]);
    };


    const removeFromCart = (uniqueId) => {
        setCartItems((previousItems) => previousItems.filter((item) => item.uniqueId !== uniqueId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};


CartProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};
