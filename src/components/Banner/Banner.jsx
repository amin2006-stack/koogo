import React from 'react';
import review from "./Group 1657.svg"
import "./Banner.scss"

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-background"></div>
            <div className="container">
                <div className="banner-box">
                    <div className="banner-col">
                        <h3 className="banner-title">Гарантия 1 год</h3>
                        <p className="banner-text">на весь ассортимент</p>
                    </div>
                    <div className="banner-col">
                        <h3 className="banner-title">рассрочка</h3>
                        <p className="banner-text">от 6 месяцев</p>
                    </div>
                    <div className="banner-col">
                        <h3 className="banner-title">Подарки</h3>
                        <p className="banner-text">и бонусам к покупкам </p>
                    </div>
                    <img className="banner-review" src={review} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Banner;