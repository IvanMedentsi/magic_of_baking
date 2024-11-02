import React from 'react';
import { Link } from 'react-router-dom';

import Cake1 from '../Icons/Cake1.jpg';
import Cake2 from '../Icons/Cake2.jpg';
import Cake3 from '../Icons/Cake3.jpg';
import Delivery from '../Icons/delivery.png';
import Production from '../Icons/prod.png';
import Prof from '../Icons/profes.png';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <section className={styles.banner}>
                <h1>МАЙСТЕРНЯ КОНДИТЕРСЬКИХ ВИРОБІВ</h1>
                <p>Все найвишуканіше і найсмачніше, в одному місці на будь-який смак і гаманець</p>
            </section>

            <section className={styles.cakes}>
                <h2>НАШІ ТОРТИ</h2>
                <div className={styles.cakeGallery}>
                    <div className={`${styles.cakeItem} ${styles.sideItem}`}>
                        <img src={Cake1} alt="Торт" className={styles.cakeImage} />
                    </div>
                    <div className={`${styles.cakeItem} ${styles.centeredItem}`}>
                        <img src={Cake2} alt="Торт" className={styles.cakeImage} />
                        <Link to="/catalog">
                            <button className={styles.viewButton}>Переглянути</button>
                        </Link>
                    </div>
                    <div className={`${styles.cakeItem} ${styles.sideItem}`}>
                        <img src={Cake3} alt="Торт" className={styles.cakeImage} />
                    </div>
                </div>
            </section>

            <section className={styles.about}>
                <h2>ПРО НАС</h2>
                <p>
                Ласкаво просимо до нашої кондитерської “Магія Випічки”! Ми створюємо солодкі шедеври, які не тільки тішать смак, а й перетворюють кожен ваш особливий момент на справжнє свято. Від вишуканих весільних тортів до миленьких кексів для будь-якої нагоди – кожен виріб створений з любовю та турботою про найдрібніші деталі.<br></br>   
                <strong>Наша місія</strong><br></br>
Ми прагнемо дарувати радість через кожен шматочок нашої випічки. Використовуючи лише найкращі інгредієнти та оригінальні рецепти, ми робимо все можливе, щоб ваші святкові моменти були смачними, яскравими та незабутніми.<br></br>
<strong>Чому ми?</strong><br></br>
Наші майстри-кондитери перетворюють ваші ідеї в унікальні десерти, що вражають своєю красою та смаковими якостями. Ми пишаємося кожним замовленням і завжди готові створити щось особливе саме для вас – будь то класичний торт, сучасний десерт або щось абсолютно нове.<br></br>
<strong>Наша історія</strong><br></br>
Ми почали свій шлях з маленької кондитерської майстерні, де кожен десерт був створений з любовю до своєї справи. Сьогодні ми розширили наш асортимент z стали одними з провідних кондитерських у регіоні, зберігаючи індивідуальний підхід до кожного клієнта.<br></br>
                    <strong>Наша місія</strong><br></br> Ми прагнемо дарувати радість через кожен шматочок нашої випічки.
                </p>
            </section>

            <section className={styles.advantages}>
                <h2>Чому Нас обирають</h2>
                <div className={styles.advantageGallery}>
                    <div className={styles.advantageItem}>
                        <img src={Production} alt="Свіжа продукція" className={styles.chooseWe} />
                        <p>Свіжа продукція</p>
                        <p className={styles.advantageText}>Щодня ми пропонуємо тільки свіжу продукцію, виготовлену з натуральних інгредієнтів.</p>
                    </div>
                    <div className={styles.advantageItem}>
                        <img src={Delivery} alt="Швидка доставка" className={styles.chooseWe} />
                        <p>Швидка доставка</p>
                        <p className={styles.advantageText}>Зручний сервіс доставки, що дозволяє насолодитися улюбленими солодощами, не виходячи з дому.</p>
                    </div>
                    <div className={styles.advantageItem}>
                        <img src={Prof} alt="Професійні кондитери" className={styles.chooseWe} />
                        <p>Професійні кондитери</p>
                        <p className={styles.advantageText}>Команда досвідчених та талановитих кондитерів, для яких створення десертів – це мистецтво.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
