import React from 'react';

import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={styles.contactsContainer}>
            <h2 className={styles.title}>КОНТАКТИ</h2>
            <div className={styles.info}>
                <div className={styles.column}>
                    <h3>Наші телефони:</h3>
                    <p><a href="tel:0994924364">099-492-43-64</a></p>
                    <p><a href="tel:0856434132">085-643-41-32</a></p>

                    <h3>Графік роботи (прийом та обробка заявок)</h3>
                    <p>Будні дні (пн. - пт.) з 10:00 до 18:00</p>
                    <p>Вихідні дні (сб. - нд.) не працюємо</p>

                    <h3>Звертатися по питанням</h3>
                    <p><a href="https://facebook.com">Наш Facebook</a></p>
                    <p><a href="https://tiktok.com">Наш TikTok</a></p>
                    <p><a href="https://instagram.com">Наш Instagram</a></p>
                    <p><a href="mailto:magicofbaking@gmail.com">Наша пошта magicofbaking@gmail.com</a></p>
                </div>

                <div className={styles.column}>
                    <h3>Адреси:</h3>
                    <p>Україна, Закарпатська область, м.Мукачево, вул.Достоєвського,2</p>
                    <p>Мобільний: <a href="tel:0954861097">095 48 61 097</a></p>
                    <p>Україна, Закарпатська область, м.Мукачево, вул.Федорова,5</p>
                    <p>Мобільний: <a href="tel:050436165">050 43 61 65</a></p>
                    <p>Україна, Закарпатська область, м.Мукачево, вул.Недецеї,39</p>
                    <p>Мобільний: <a href="tel:099533276">099 53 32 76</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
