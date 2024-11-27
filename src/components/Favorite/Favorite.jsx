import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import accum from "../../assets/accum.svg";
import power from "../../assets/power.svg";
import speed from "../../assets/speed.svg";
import timer from "../../assets/timer.svg";
import shoppingCart from "../../assets/shoppingCart.svg";
import {toggleFavorites} from "../../store/reducers/favorites.js";


const Favorite = () => {

    const dispatch = useDispatch()
    const favorite = useSelector((state) => state.favorites)
    const {data} = useSelector(state => state.products)

    console.log(favorite)

    return (
        <section className="favorite">
            <div className="container-small">
                <div className="products-row">

                    {
                        data.filter(item => favorite.data.includes(item.id)).map((item) => (
                            <div key={item.id} className="products-col">
                                <div className="products-col-img"></div>

                                <h4 className="products-col-title">{item.name}</h4>

                                <div className="products-col-infoOne">
                                    <img className="products-col-info-img" src={accum} alt=""/>
                                    <span className="products-col-info-text">{item.battery} mAh</span>
                                    <img className="products-col-info-img" src={power} alt=""/>
                                    <span className="products-col-info-text">{item.power} л.с.</span>
                                </div>

                                <div className="products-col-infoOne">
                                    <img className="products-col-info-img" src={speed} alt=""/>
                                    <span className="products-col-info-textt">{item.speed} км/ч</span>
                                    <img className="products-col-info-img" src={timer} alt=""/>
                                    <span className="products-col-info-text">{item.time} часов</span>
                                </div>

                                <div className="products-col-infoTwo">
                                    <div className="products-col-infoTwo-left">
                                        <p className="products-col-price">{item.price}</p>
                                        <p className="products-col-discount">{item.discount}</p>
                                    </div>
                                    <div className="products-col-infoTwo-right">
                                        <img className="products-col-infoTwo-rightt" src={shoppingCart} alt=""/>
                                        <p onClick={() => dispatch(toggleFavorites(item.id))}
                                           className="catalog__card-like">
                                            <svg width="21" height="18" viewBox="0 0 21 18"
                                                 fill={`${favorite.data.includes(item.id) ? '#ff0000' : '#ffffff'}`}
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M2.31802 2.31802C4.07538 0.56066 6.92462 0.56066 8.68198 2.31802L10.5 4.13604L12.318 2.31802C14.0754 0.56066 16.9246 0.56066 18.682 2.31802C20.4393 4.07538 20.4393 6.92462 18.682 8.68198L10.5 16.864L2.31802 8.68198C0.56066 6.92462 0.56066 4.07538 2.31802 2.31802Z"
                                                      stroke="#0F303F" stroke-linecap="round"/>
                                            </svg>
                                        </p>
                                    </div>
                                </div>

                                <button className='products-col-btn'>
                                    <p className="products-col-btn-text">Купить в 1 клик</p>
                                </button>
                            </div>
                        ))
                    }


                </div>
            </div>
        </section>
    );
};

export default Favorite;