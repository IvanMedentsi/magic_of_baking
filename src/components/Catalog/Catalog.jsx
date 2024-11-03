// src/components/Catalog/Catalog.js
import React, { useState } from 'react';

import Tort1 from '../CakePhoto/Tort1.jpg';
import Tort2 from '../CakePhoto/Tort2.jpg';
import Tort3 from '../CakePhoto/Tort3.jpg';
import Tort4 from '../CakePhoto/Tort4.jpg';
import Tort5 from '../CakePhoto/Tort5.png';
import Tort6 from '../CakePhoto/Tort6.jpg';
import Tort7 from '../CakePhoto/Tort7.jpg';
import Tort8 from '../CakePhoto/Tort8.jpg';
import Tort9 from '../CakePhoto/Tort9.jpg';
import Tort10 from '../CakePhoto/Tort10.png';
import Tort11 from '../CakePhoto/Tort11.png';
import Tort12 from '../CakePhoto/Tort12.png';
import Tort13 from '../CakePhoto/Tort13.jpg';
import Tort14 from '../CakePhoto/Tort14.png';
import Tort15 from '../CakePhoto/Tort15.png';
import Tort16 from '../CakePhoto/Tort16.jpg';
import Tort17 from '../CakePhoto/Tort17.jpg';
import Tort18 from '../CakePhoto/Tort18.jpg';
import { useCart } from '../CartContext/CartContext'; // Імпортуйте useCart
import styles from './Catalog.module.css';

const productsPage1 = [
    { name: 'Торт "Чізкейк "', price: 770, weight: '900 г', image: Tort1 },
    { name: 'Торт "Естерхазі"', price: 850, weight: '1 кг', image: Tort2 },
    { name: 'Торт "Київський дарунок "', price: 770, weight: '850 г', image: Tort3 },
    { name: 'Торт "Мокко"', price: 770, weight: '900 г', image: Tort4 },
    { name: 'Торт "Снікерс"', price: 900, weight: '1 кг', image: Tort5 },
    { name: 'Торт "Мигдалевий"', price: 500, weight: '700 г', image: Tort6 },
    { name: 'Торт "Акація"', price: 650, weight: '850 г', image: Tort7 },
    { name: 'Торт "Орео"', price: 750, weight: '900 г', image: Tort8 },
    { name: 'Торт "Брауні Асорті"', price: 770, weight: '900 г', image: Tort9 },
];

const productsPage2 = [
    { name: 'Торт "Чорний ліс"', price: 850, weight: '1 кг', image: Tort10 },
    { name: 'Торт "Празький"', price: 750, weight: '900 г', image: Tort11 },
    { name: 'Торт "Київський"', price: 600, weight: '800 г', image: Tort12 },
    { name: 'Торт "Захер"', price: 1000, weight: '1 кг', image: Tort13 },
    { name: 'Торт "Наполеон"', price: 850, weight: '950 г', image: Tort14 },
    { name: 'Торт "Пташине Молоко"', price: 750, weight: '800 г', image: Tort15 },
    { name: 'Торт "Червоний оксамит"', price: 850, weight: '1 кг', image: Tort16 },
    { name: 'Торт "Добош"', price: 800, weight: '900 г', image: Tort17 },
    { name: 'Торт "Медівник"', price: 900, weight: '950 г', image: Tort18 },
];

const Catalog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { addToCart } = useCart(); // Використовуйте контекст

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} додано до кошика!`); // Можна додати сповіщення
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const products = currentPage === 1 ? productsPage1 : productsPage2;

    return (
        <div className={styles.catalogContainer}>
            <h2 className={styles.catalogTitle}>КАТАЛОГ</h2>
            <div className={styles.productGrid}>
                {products.map((product, index) => (
                    <div key={index} className={styles.productItem}>
                        <img src={product.image} alt={product.name} className={styles.productImage} />
                        <h3 className={styles.productName}>{product.name}</h3>
                        <p className={styles.productPrice}>{product.price}</p>
                        <p className={styles.productWeight}>Вага: {product.weight}</p>
                        <button onClick={() => handleAddToCart(product)} className={styles.cartButton}>
                            Додати до кошика
                        </button>
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                <button
                    onClick={() => handlePageChange(1)}
                    className={`${styles.pageLink} ${currentPage === 1 ? styles.active : ''}`}
                >
                    1
                </button>
                <button
                    onClick={() => handlePageChange(2)}
                    className={`${styles.pageLink} ${currentPage === 2 ? styles.active : ''}`}
                >
                    2
                </button>
            </div>
        </div>
    );
};

export default Catalog;
