import React from 'react';

import DeliveryImage from '../Icons/deliveryphoto.png';
import PaymentImage from '../Icons/oplata.png';
import styles from './PaymentDelivery.module.css';

const PaymentDelivery = () => {
    return (
        <div className={styles.deliverySection}>
            <div className={styles.textBox}>
                <h2>Умови оплати та замовлення:</h2>
                <ul>
                    <li>При оформленні замовлення необхідно внести оплату 50% або повну.</li>
                    <li>Якщо у вас немає змоги забрати виріб під замовлення у магазині, коли замовлення готове, ми не повертаємо оплату.</li>
                    <li>Спосіб оплати: карткою, готівкою при отриманні.</li>
                    <li>Замовлення, отримані після 18:00, обробляються протягом наступного робочого дня.</li>
                    <li>Відповідно до постанови Кабінету Міністрів України від 19 березня 1994 року, продовольчі товари належної якості не підлягають обміну (поверненню).</li>
                </ul>
            </div>
            
            <div className={styles.imageContainer + ' ' + styles.paymentImage}>
    <img src={PaymentImage} alt="Умови оплати" className={styles.image} />
</div>
            <div className={styles.imageContainer}>
                <img src={DeliveryImage} alt="Умови доставки" className={styles.image} />
            </div>
            <div className={styles.textBox}>
                <h2>Умови доставки:</h2>
                <ul>
                    <li>Ви можете забрати замовлення з магазину з 8:00 до 19:00.</li>
                    <li>Курєрська доставка: від 50 гривень в окремих містах (за запитом).</li>
                    <li>Безкоштовна доставка у наближений до нас магазин.</li>
                    <li>Доставка Новою Поштою (для продукції, яка має тривалий термін зберігання).</li>
                    <li>Доставка курєром Нової пошти (за рахунок покупця).</li>
                </ul>
            </div>
        </div>
    );
};

export default PaymentDelivery;