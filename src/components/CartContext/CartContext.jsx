import PropTypes from 'prop-types'; // Імпорт PropTypes для валідації
import React, { createContext, useContext, useState } from 'react';

// Створюємо контекст
export const CartContext = createContext();

// Провайдер кошика
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Додає товар як окремий елемент в кошик
    const addToCart = (item) => {
        const uniqueItem = { ...item, uniqueId: Date.now() }; // Унікальний ідентифікатор для кожного доданого елементу
        setCartItems((previousItems) => [...previousItems, uniqueItem]);
    };

    // Видаляє конкретний елемент за його унікальним ідентифікатором
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

// Хук для використання контексту
export const useCart = () => {
    return useContext(CartContext);
};

// Валідація пропсів
CartProvider.propTypes = {
    children: PropTypes.node.isRequired, // Вказуємо, що children - це обов'язковий пропс
};
