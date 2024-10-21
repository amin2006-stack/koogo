import React from 'react';
import "./Products.scss"
import scooter from "../../assets/scooter.png"
import accum from "../../assets/accum.svg"
import power from  "../../assets/power.svg"
import speed from "../../assets/speed.svg"
import timer from "../../assets/timer.svg"
import shoppingCart from "../../assets/shoppingCart.svg"
import favorite from "../../assets/favorite.svg"

const Products = () => {
    return (
        <div className="products">
            <div className="container">
                <div className="products__top"></div>
                <div className="products__center">
                    <div className="products__center">
                        <div>
                            <div className="products__center-action">Новинка</div>
                            <div className="products__center-hit">Хит</div>
                        </div>
                        <img src={scooter} alt=""/>
                        <div>
                            <h3>Kugoo Kirin M4</h3>
                            <div>
                                <img src={accum} alt=""/>
                                <p>20000 mAh</p>
                                <img src={power} alt=""/>
                                <p>1,2 л.с</p>
                            </div>
                            <div>
                                <img src={speed} alt=""/>
                                <p>60 км/ч</p>
                                <img src={timer} alt=""/>
                                <p>5 час</p>
                            </div>
                            <div>
                                <div>
                                    <p>39 000P</p>
                                    <h4>29 990P</h4>
                                </div>
                                <div>
                                    <div>
                                        <img src={shoppingCart} alt=""/>
                                    </div>
                                    <div>
                                        <img src={favorite} alt=""/>

                                    </div>

                                </div>

                            </div>
                            <button>Купить в 1 клик</button>


                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Products;