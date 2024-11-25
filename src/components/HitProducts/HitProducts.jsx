import React from 'react';
import "./HitProducts.scss"
import woman from './Mask Group.svg'

const HitProducts = () => {
    return (
        <div className="hitProducts">
            <div className="container">
                <div className="hit-top">

                    <h2 className="hit-top-h2">Популярные категории</h2>

                    <div className="hit-top-onThe_right">
                        <div className="hit-top-left">
                            <img className="hit-top-left-woman" src={woman} alt=""/>
                        </div>
                        <div className="hit-top-right">
                            <p className="hit-top-right-woman">Менеджер ответит на любой <br/>
                                ваш вопрос о продуктах Kugoo</p>
                            <p className='hit-top-right-question'>Задать вопрос</p>
                        </div>
                    </div>

                </div>

                <div className="hit-center">

                </div>

            </div>
        </div>
    );
};

export default HitProducts;