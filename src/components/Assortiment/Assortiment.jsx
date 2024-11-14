import React from 'react';
import  "./Assortiment.scss"


const Assortiment = () => {
    return (
        <div className="assortiment">
            <div className="container">

                <div className="box">
                    <div className="left">
                        <h4 className="left-title">Подбор модели электросамоката</h4>
                        <p className="left-text">Пройдите тест и выберите электросамокат по своим критериям</p>
                        <p className="">Подобрать модель</p>
                    </div>
                    <div className="right">
                        <h4 className="right-title">Сервисное обслуживание</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Assortiment;