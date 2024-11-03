import PropTypes from 'prop-types'; 
import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const uniqueItem = { ...item, uniqueId: Date.now(), quantity: item.quantity || 1 }; 
        setCartItems((previousItems) => [...previousItems, uniqueItem]);
    };

    const removeFromCart = (uniqueId) => {
        setCartItems((previousItems) => previousItems.filter((item) => item.uniqueId !== uniqueId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    // Підрахунок загальної суми
    const getTotal = () => {
        let total = 0;
        for (const item of cartItems) {
            const itemPrice = item.price || 0; // Перевірка, якщо price не визначено, підставляємо 0
            const itemQuantity = item.quantity || 0; // Перевірка, якщо quantity не визначено, підставляємо 0
            total += itemPrice * itemQuantity; // Додаємо до загальної суми
        }
        return total;
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getTotal }}>
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
