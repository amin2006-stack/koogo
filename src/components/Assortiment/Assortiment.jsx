import React from 'react';
import  "./Assortiment.scss"


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

            </div>
        </div>
    );
};

export default Assortiment;