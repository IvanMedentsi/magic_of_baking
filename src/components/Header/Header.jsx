import React, { useContext, useState } from 'react'; 
import { Link } from 'react-router-dom';

import { CartContext } from '../CartContext/CartContext';
import Logo from '../Icons/Logotype.png';
import styles from './Header.css';

const Header = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);
    const [isBasketOpen, setBasketOpen] = useState(false);
    const totalItems = cartItems.length;

    const toggleBasket = () => {
        setBasketOpen(!isBasketOpen);
    };

    const calculateTotal = () => {
        let total = 0;
        for (const item of cartItems) {
            if (item.price && item.quantity && !Number.isNaN(item.price) && !Number.isNaN(item.quantity)) {
                total += item.price * item.quantity;
            }
        }
        return total;
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={Logo} alt="Logo" className="logotype" />
                </Link>
                <h1>Магія <br /> Випічки</h1>
            </div>
            <nav className={styles.nav}>
                <div className={styles.navLine}></div>
                <ul>
                    <li><Link to="/catalog">Каталог</Link></li>
                    <li><Link to="/payment-delivery">Оплата та доставка</Link></li>
                    <li><Link to="/contacts">Контакти</Link></li>
                    <li>
                        <button onClick={toggleBasket} className={styles.basketButton}>
                            Кошик {totalItems > 0 && <span className={styles.cartCount}>({totalItems})</span>}
                        </button>
                    </li>
                    <li><Link to="/login">Логін/Реєстрація</Link></li>
                </ul>
            </nav>
            {isBasketOpen && (
                <div className={styles.basketContainer}>
                    <h2>Кошик</h2>
                    {cartItems.length === 0 ? (
                        <p>Ваш кошик порожній</p>
                    ) : (
                        cartItems.map((item) => (
                            <div className={styles.basketItem} key={item.uniqueId}>
                                <img src={item.image} alt={item.name} className={styles.basketImage} />
                                <span className={styles.itemName}>{item.name}</span>
                                <span className={styles.price}>{item.price.toLocaleString()} грн</span>
                                <button className={styles.removeItem} onClick={() => removeFromCart(item.uniqueId)}>×</button>
                            </div>
                        ))
                    )}
                    <div className={styles.orderSummary}>
                        <p>Разом: {calculateTotal().toLocaleString()} грн</p>
                        <Link to="/checkout">
                            <button className={styles.orderButton}>Оформити замовлення</button>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
