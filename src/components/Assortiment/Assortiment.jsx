import React from 'react';
import  "./Assortiment.scss"
import lfy from "./fly.png"

const Assortiment = () => {
    return (
        <div className="assortiment">
            <div className="container">

                <div className="box">
                    <div className="left">
                        <h4 className="left-title">Подбор модели <br/> электросамоката</h4>
                        <p className="left-text">Пройдите тест и выберите электросамокат по своим критериям</p>
                        <p className="left-texts">Подобрать модель</p>
                    </div>
                    <div className="right">
                        <h4 className="right-title">Сервисное <br/> обслуживание</h4>
                        <p className="left-text">Крупнейший сервисный центр в России для продуктов Kugoo</p>
                        <p className="left-texts">Подобрать модель</p>
                    </div>
                </div>

                <div className="box-end">
                    <div className="box-end-left">
                        <img className="box-end-fly" src={lfy} alt=""/>
                    </div>
                    <div className="box-end-right">
                        <span className="box-end-promotion">Акция</span>
                        <p className="box-end-info">Бесплатная доставка электросамокатовпо России до 01.09</p>
                        <button className="box-end-btn">
                            <p className="box-end-btn-text">Подробнее</p>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Assortiment;