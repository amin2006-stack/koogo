import React from "react";
import "./Header.scss";
import callImg from "../../assets/call.svg";
import whatsappImg from "../../assets/whatsap.svg";
import telegramImg from "../../assets/telegram.svg";
import viberImg from "../../assets/viber.svg";
import kugoo from "../../assets/Kugoo.svg";
import group from "../../assets/group.svg";
import scales from "./Vector.svg";
import chosenOne from "./Vector (1).svg";
import basket from "./Vector (2).svg";
import percent from "../../assets/percent.svg";
import search from "../../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/user.js";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.user);

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <nav className="top__left">
            <a href="src/components/Header#" className="top__link">
              Сервис
            </a>
            <a href="src/components/Header#" className="top__link">
              Сотрудничество
            </a>
            <a href="src/components/Header#" className="top__link">
              Заказать звонок
            </a>
            {user.status === "success" && (
              <button onClick={() => dispatch(logOut())}>
                Выйти с аккаунта
              </button>
            )}
          </nav>

          <div className="top__img">
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="sot__img" src={whatsappImg} alt="WhatsApp" />
            </a>
            <a
              href="https://t.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="sot__img" src={telegramImg} alt="Telegram" />
            </a>
            <a
              href="viber://call?number=your-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="sot__img" src={callImg} alt="Phone icon" />
            </a>
          </div>

          <div className="top__right">
            <p className="top__phone">+7 (800) 505-54-61</p>
            <img className="phone__img" src={viberImg} alt="Viber icon" />
          </div>
        </div>

        <div className="header__center">
          <div className="img1">
            <img src={kugoo} alt="Kugoo" />
          </div>
          <div className="catalog">
            <img className="catalog-btn" src={group} alt="Catalog" />
          </div>
          <div className="search">
            <input
              type="search"
              placeholder="Искать самокат KUGO"
              aria-label="Поиск самокатов KUGO"
            />
            <img className="search-img" src={search} alt="Search" />
          </div>
          <div className="images">
            <img className="header-img" src={scales} alt="Весы" />
            <img className="header-img" src={chosenOne} alt="Избранный" />
            <img className="header-img" src={basket} alt="Корзина" />
            <span className="header-img-text">Корзина</span>
          </div>
        </div>

        <div className="header__bottom">
          <nav className="nav-bottom">
            <div className="nav-item">
              <a href="src/components/Header">О магазине</a>
              <div className="dropdown">
                <a href="src/components/Header">История</a>
                <a href="src/components/Header">Отзывы</a>
              </div>
            </div>
            <a href="src/components/Header">Доставка и оплата</a>
            <a href="src/components/Header">Доступна рассрочка</a>
            <a href="src/components/Header">Тест-драйв</a>
            <a href="src/components/Header">Блог</a>
            <a href="src/components/Header">Контакты</a>
            <a href="src/components/Header">Акции</a>
            <img className="percent" src={percent} alt="Акции" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
