import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.css'; 

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.companyInfo}>
                    <h3>Про компанію</h3>
                    <ul>
                        
                    <li><Link to="/catalog">Каталог</Link></li>
                    <li><Link to="/payment-delivery">Оплата та доставка</Link></li>
                    <li><Link to="/contacts">Контакти</Link></li>
                    </ul>
                </div>
                <div className={styles.productsInfo}>
                    <h3>Продукція</h3>
                    <ul>
                        <li>Торти</li>
                    </ul>
                </div>
                <div className={styles.addressInfo}>
                    <h3>Адреса</h3>
                    <p> м.Мукачево, вул.Миру,2</p>
                </div>
                <div className={styles.contactInfo}>
                    <h3>Контакти</h3>
                    <ul>
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://tiktok.com">TikTok</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
