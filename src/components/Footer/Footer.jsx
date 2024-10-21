import React from 'react';
import kugoo from "../../assets/Kugoo.svg";
import "./Footer.scss";
import google from "../../assets/google.svg";
import appstore from "../../assets/appstore.svg";
import wk from "../../assets/wk.svg";
import inst from "../../assets/inst.svg";
import teleg from "../../assets/teleg.svg";
import yout from "../../assets/yout.svg";
import pay from "../../assets/pay.svg";
import apay from "../../assets/apay.svg";
import visa from "../../assets/visa.svg";
import red from "../../assets/red.svg";
import blue from "../../assets/blue.svg";
import webm from "../../assets/webm.svg";
import orang from "../../assets/orang.svg";
import callImg from "../../assets/call.svg";
import telegramImg from "../../assets/telegram.svg";
import whatsappImg from "../../assets/whatsap.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__section">
                        <h2>Каталог товаров</h2>
                        <ul>
                            <li><a href="src/components/Footer">Электросамокаты</a></li>
                            <li><a href="src/components/Footer">Электроскутеры</a></li>
                            <li><a href="src/components/Footer">Электровелосипеды</a></li>
                            <li><a href="src/components/Footer">Аксессуары</a></li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h2>Покупателям</h2>
                        <ul>
                            <li><a href="src/components/Footer">Сервисный центр</a></li>
                            <li><a href="src/components/Footer">Доставка и оплата</a></li>
                            <li><a href="src/components/Footer">Рассрочка</a></li>
                            <li><a href="src/components/Footer">Тест-драйв</a></li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h2>Блог</h2>
                        <ul>
                            <li><a href="src/components/Footer">Сотрудничество</a></li>
                            <li><a href="src/components/Footer">Контакты</a></li>
                            <li><a href="src/components/Footer">Акции</a></li>
                        </ul>
                    </div>

                    <div className="footer__section">
                        <h2>Контакты</h2>
                        <div className="footer__contact-info">
                            <p>Call-центр: +7 (800) 505-54-61</p>
                            <p>Время работы: Пн-Вс 10:00 - 20:00</p>
                        </div>
                        <div className="footer__address">
                            <p>Москва, ул. Ткацкая, 5 стр. 16</p>
                            <p>Санкт-Петербург, ул. Фрунзе, 2</p>
                            <p>Краснодар, ул. Восточно-Кругликовская, 86</p>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <div className="footer__logos">
                        <img src={kugoo} alt="Kugoo" />
                        <img src={google} alt="Google Play" />
                        <img src={appstore} alt="App Store" />
                    </div>
                    <div className="footer__socials">
                        <img src={wk} alt="VK" />
                        <img src={inst} alt="Instagram" />
                        <img src={yout} alt="YouTube" />
                        <img src={teleg} alt="Telegram" />
                    </div>
                </div>

                <div className="footer__legal">
                    <div className="footer__legal-links">
                        <a href="src/components/Footer">Реквизиты</a>
                        <a href="src/components/Footer">Политика конфиденциальности</a>
                    </div>
                    <div className="footer__payment-methods">
                        <img className="images" src={pay} alt="Pay" />
                        <img className="images" src={apay} alt="Apple Pay" />
                        <img className="images" src={visa} alt="Visa" />
                        <img className="images" src={red} alt="MasterCard" />
                        <img className="images" src={blue} alt="Maestro" />
                        <img className="images" src={webm} alt="WebMoney" />
                        <img className="images" src={orang} alt="Qiwi" />
                    </div>
                    <div className="footer__chat">
                        <p>Online чат:</p>
                        <img className="sot__img" src={callImg} alt="Phone icon" />
                        <img className="sot__img" src={telegramImg} alt="Telegram" />
                        <img className="sot__img" src={whatsappImg} alt="WhatsApp" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
