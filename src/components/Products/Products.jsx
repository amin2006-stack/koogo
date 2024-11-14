import React from 'react';
import "./Products.scss"
import accum from "../../assets/accum.svg"
import power from "../../assets/power.svg"
import speed from "../../assets/speed.svg"
import timer from "../../assets/timer.svg"
import shoppingCart from "../../assets/shoppingCart.svg"
import favorite from "../../assets/favorite.svg"


const Products = () => {
    return (
        <div className="products">
            <div className="container">
                <div className="products-nav">
                    <h3 className="products-nav-title">Электросамокаты</h3>
                    <button className="products-nav-btn">
                        <p className="products-nav-text">Хиты продаж</p>
                    </button>
                    <button className="products-nav-btn">
                        <p className="products-nav-text">Для города</p>
                    </button>
                    <button className="products-nav-btn">
                        <p className="products-nav-text">Для взрослых</p>
                    </button>
                    <button className="products-nav-btn">
                        <p className="products-nav-text">Для детей</p>
                    </button>
                </div>

                <div className="products-row">

                    <div className="products-col">
                    <div className="products-col-img"></div>

                    <h4 className="products-col-title">Kugoo Kirin M4</h4>

                    <div className="products-col-infoOne">
                        <img className="products-col-info-img" src={accum} alt=""/>
                        <span className="products-col-info-text">2000 mAh</span>
                        <img className="products-col-info-img" src={power} alt=""/>
                        <span className="products-col-info-text">1,2 л.с.</span>
                    </div>

                    <div className="products-col-infoOne">
                        <img className="products-col-info-img" src={speed} alt=""/>
                        <span className="products-col-info-textt">60 км/ч</span>
                        <img className="products-col-info-img" src={timer} alt=""/>
                        <span className="products-col-info-text">5 часов</span>
                    </div>

                    <div className="products-col-infoTwo">
                        <div className="products-col-infoTwo-left">
                            <p className="products-col-price">39 900</p>
                            <p className="products-col-discount">29 900</p>
                        </div>
                        <div className="products-col-infoTwo-right">
                            <img className="products-col-infoTwo-rightt" src={shoppingCart} alt=""/>
                            <img className="products-col-infoTwo-righttt" src={favorite} alt=""/>
                        </div>
                    </div>

                    <button className='products-col-btn'>
                        <p className="products-col-btn-text">Купить в 1 клик</p>
                    </button>

                </div>
                    <div className="products-col">
                        <div className="products-col-img"></div>

                        <h4 className="products-col-title">Kugoo Kirin M4</h4>

                        <div className="products-col-infoOne">
                            <img className="products-col-info-img" src={accum} alt=""/>
                            <span className="products-col-info-text">2000 mAh</span>
                            <img className="products-col-info-img" src={power} alt=""/>
                            <span className="products-col-info-text">1,2 л.с.</span>
                        </div>

                        <div className="products-col-infoOne">
                            <img className="products-col-info-img" src={speed} alt=""/>
                            <span className="products-col-info-textt">60 км/ч</span>
                            <img className="products-col-info-img" src={timer} alt=""/>
                            <span className="products-col-info-text">5 часов</span>
                        </div>

                        <div className="products-col-infoTwo">
                            <div className="products-col-infoTwo-left">
                                <p className="products-col-price">39 900</p>
                                <p className="products-col-discount">29 900</p>
                            </div>
                            <div className="products-col-infoTwo-right">
                                <img className="products-col-infoTwo-rightt" src={shoppingCart} alt=""/>
                                <img className="products-col-infoTwo-righttt" src={favorite} alt=""/>
                            </div>
                        </div>

                        <button className='products-col-btn'>
                            <p className="products-col-btn-text">Купить в 1 клик</p>
                        </button>

                    </div>
                    <div className="products-col">
                        <div className="products-col-img"></div>

                        <h4 className="products-col-title">Kugoo Kirin M4</h4>

                        <div className="products-col-infoOne">
                            <img className="products-col-info-img" src={accum} alt=""/>
                            <span className="products-col-info-text">2000 mAh</span>
                            <img className="products-col-info-img" src={power} alt=""/>
                            <span className="products-col-info-text">1,2 л.с.</span>
                        </div>

                        <div className="products-col-infoOne">
                            <img className="products-col-info-img" src={speed} alt=""/>
                            <span className="products-col-info-textt">60 км/ч</span>
                            <img className="products-col-info-img" src={timer} alt=""/>
                            <span className="products-col-info-text">5 часов</span>
                        </div>

                        <div className="products-col-infoTwo">
                            <div className="products-col-infoTwo-left">
                                <p className="products-col-price">39 900</p>
                                <p className="products-col-discount">29 900</p>
                            </div>
                            <div className="products-col-infoTwo-right">
                                <img className="products-col-infoTwo-rightt" src={shoppingCart} alt=""/>
                                <img className="products-col-infoTwo-righttt" src={favorite} alt=""/>
                            </div>
                        </div>

                        <button className='products-col-btn'>
                            <p className="products-col-btn-text">Купить в 1 клик</p>
                        </button>

                    </div>
                    <div className="products-col">
                        <div className="products-col-img"></div>

                        <h4 className="products-col-title">Kugoo Kirin M4</h4>

                        <div className="products-col-infoOne">
                            <img className="products-col-info-img" src={accum} alt=""/>
                            <span className="products-col-info-text">2000 mAh</span>
                            <img className="products-col-info-img" src={power} alt=""/>
                            <span className="products-col-info-text">1,2 л.с.</span>
                        </div>

                        <div className="products-col-infoOne">
                            <img className="products-col-info-img" src={speed} alt=""/>
                            <span className="products-col-info-textt">60 км/ч</span>
                            <img className="products-col-info-img" src={timer} alt=""/>
                            <span className="products-col-info-text">5 часов</span>
                        </div>

                        <div className="products-col-infoTwo">
                            <div className="products-col-infoTwo-left">
                                <p className="products-col-price">39 900</p>
                                <p className="products-col-discount">29 900</p>
                            </div>
                            <div className="products-col-infoTwo-right">
                                <img className="products-col-infoTwo-rightt" src={shoppingCart} alt=""/>
                                <img className="products-col-infoTwo-righttt" src={favorite} alt=""/>
                            </div>
                        </div>

                        <button className='products-col-btn'>
                            <p className="products-col-btn-text">Купить в 1 клик</p>
                        </button>

                    </div>
                    <div className="products-col">
                        <div className="products-col-img"></div>

                        <h4 className="products-col-title">Kugoo Kirin M4</h4>

                        <div className="products-col-infoOne">
                            <img className="products-col-info-img" src={accum} alt=""/>
                            <span className="products-col-info-text">2000 mAh</span>
                            <img className="products-col-info-img" src={power} alt=""/>
                            <span className="products-col-info-text">1,2 л.с.</span>
                        </div>

                        <div className="products-col-infoOne">
                            <img className="products-col-info-img" src={speed} alt=""/>
                            <span className="products-col-info-textt">60 км/ч</span>
                            <img className="products-col-info-img" src={timer} alt=""/>
                            <span className="products-col-info-text">5 часов</span>
                        </div>

                        <div className="products-col-infoTwo">
                            <div className="products-col-infoTwo-left">
                                <p className="products-col-price">39 900</p>
                                <p className="products-col-discount">29 900</p>
                            </div>
                            <div className="products-col-infoTwo-right">
                                <img className="products-col-infoTwo-rightt" src={shoppingCart} alt=""/>
                                <img className="products-col-infoTwo-righttt" src={favorite} alt=""/>
                            </div>
                        </div>

                        <button className='products-col-btn'>
                            <p className="products-col-btn-text">Купить в 1 клик</p>
                        </button>

                    </div>
                    <div className="products-col">
                        <div className="products-col-img"></div>

                        <h4 className="products-col-title">Kugoo Kirin M4</h4>

                        <div className="products-col-infoOne">
                            <img className="products-col-info-img" src={accum} alt=""/>
                            <span className="products-col-info-text">2000 mAh</span>
                            <img className="products-col-info-img" src={power} alt=""/>
                            <span className="products-col-info-text">1,2 л.с.</span>
                        </div>

                        <div className="products-col-infoOne">
                            <img className="products-col-info-img" src={speed} alt=""/>
                            <span className="products-col-info-textt">60 км/ч</span>
                            <img className="products-col-info-img" src={timer} alt=""/>
                            <span className="products-col-info-text">5 часов</span>
                        </div>

                        <div className="products-col-infoTwo">
                            <div className="products-col-infoTwo-left">
                                <p className="products-col-price">39 900</p>
                                <p className="products-col-discount">29 900</p>
                            </div>
                            <div className="products-col-infoTwo-right">
                                <img className="products-col-infoTwo-rightt" src={shoppingCart} alt=""/>
                                <img className="products-col-infoTwo-righttt" src={favorite} alt=""/>
                            </div>
                        </div>

                        <button className='products-col-btn'>
                            <p className="products-col-btn-text">Купить в 1 клик</p>
                        </button>

                    </div>
                    <div className="products-col">
                        <div className="products-col-img"></div>

                        <h4 className="products-col-title">Kugoo Kirin M4</h4>

                        <div className="products-col-infoOne">
                            <img className="products-col-info-img" src={accum} alt=""/>
                            <span className="products-col-info-text">2000 mAh</span>
                            <img className="products-col-info-img" src={power} alt=""/>
                            <span className="products-col-info-text">1,2 л.с.</span>
                        </div>

                        <div className="products-col-infoOne">
                            <img className="products-col-info-img" src={speed} alt=""/>
                            <span className="products-col-info-textt">60 км/ч</span>
                            <img className="products-col-info-img" src={timer} alt=""/>
                            <span className="products-col-info-text">5 часов</span>
                        </div>

                        <div className="products-col-infoTwo">
                            <div className="products-col-infoTwo-left">
                                <p className="products-col-price">39 900</p>
                                <p className="products-col-discount">29 900</p>
                            </div>
                            <div className="products-col-infoTwo-right">
                                <img className="products-col-infoTwo-rightt" src={shoppingCart} alt=""/>
                                <img className="products-col-infoTwo-righttt" src={favorite} alt=""/>
                            </div>
                        </div>

                        <button className='products-col-btn'>
                            <p className="products-col-btn-text">Купить в 1 клик</p>
                        </button>

                    </div>
                    <div className="products-col">
                        <div className="products-col-img"></div>

                        <h4 className="products-col-title">Kugoo Kirin M4</h4>

                        <div className="products-col-infoOne">
                            <img className="products-col-info-img" src={accum} alt=""/>
                            <span className="products-col-info-text">2000 mAh</span>
                            <img className="products-col-info-img" src={power} alt=""/>
                            <span className="products-col-info-text">1,2 л.с.</span>
                        </div>

                        <div className="products-col-infoOne">
                            <img className="products-col-info-img" src={speed} alt=""/>
                            <span className="products-col-info-textt">60 км/ч</span>
                            <img className="products-col-info-img" src={timer} alt=""/>
                            <span className="products-col-info-text">5 часов</span>
                        </div>

                        <div className="products-col-infoTwo">
                            <div className="products-col-infoTwo-left">
                                <p className="products-col-price">39 900</p>
                                <p className="products-col-discount">29 900</p>
                            </div>
                            <div className="products-col-infoTwo-right">
                                <img className="products-col-infoTwo-rightt" src={shoppingCart} alt=""/>
                                <img className="products-col-infoTwo-righttt" src={favorite} alt=""/>
                            </div>
                        </div>

                        <button className='products-col-btn'>
                            <p className="products-col-btn-text">Купить в 1 клик</p>
                        </button>

                    </div>

                </div>

                <button className="products-end-btn">
                    <p className="products-end-text">Смотреть все</p>
                </button>



            </div>
        </div>

    );
};

export default Products;