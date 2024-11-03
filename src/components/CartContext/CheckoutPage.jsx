import React, { useState } from 'react';

import useOrder from '../../hooks/useOrder'; 
import { useCart } from './CartContext';
import styles from './CheckoutPage.module.css'; 

const CheckoutPage = () => {
    const { cartItems } = useCart();
    const { createOrder, loading, error } = useOrder();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        delivery: ''
    });

    // Підрахунок загальної суми
    const total = cartItems.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createOrder({ ...formData, items: cartItems, total });
    };

    return (
        <div className={styles.checkoutContainer}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.payerDetails}>
                    <h2>Дані платника</h2>
                    <label>Імя:</label>
                    <input type="text" name="firstName" placeholder="Ім'я" onChange={handleChange} required />
                    <label>Прізвище:</label>
                    <input type="text" name="lastName" placeholder="Прізвище" onChange={handleChange} required />
                    <label>Телефон:</label>
                    <input type="tel" name="phone" placeholder="Телефон" onChange={handleChange} required />
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                </div>
                <div className={styles.deliveryDetails}>
                    <h2>Адреса доставки</h2>
                    <label>Адреса доставки / Відділення</label>
                    <input type="text" name="address" placeholder="Адреса" onChange={handleChange} required />
                    <div className={styles.radioButtonsContainer}>
                        <div className={styles.deliveryOption}>
                            <input type="radio" id="novaPoshta" name="delivery" value="nova" onChange={handleChange} required />
                            <label htmlFor="novaPoshta">Нова Пошта</label>
                        </div>
                        <div className={styles.deliveryOption}>
                            <input type="radio" id="ukrPoshta" name="delivery" value="ukr" onChange={handleChange} required />
                            <label htmlFor="ukrPoshta">Укр Пошта</label>
                        </div>
                    </div>
                </div>
                <div className={styles.cartSummary}>
                    <h2>Ваші товари</h2>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.uniqueId}>
                                {item.name} - {item.price} грн (x{item.quantity})
                            </li>
                        ))}
                    </ul>
                    <p>До оплати: {total} грн</p>
                    <button className={styles.submitButton} disabled={loading}>
                        {loading ? 'Оформлення...' : 'Оформити'}
                    </button>
                    {error && <p className={styles.error}>{error}</p>} 
                </div>
            </form>
        </div>
    );
};

export default CheckoutPage;
