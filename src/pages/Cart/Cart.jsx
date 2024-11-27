import React from 'react';
import {useSelector} from "react-redux";
import {addCart, removeCart} from "../../store/reducers/carts.js";
import "./Cart.css"

const Cart = () => {

    const carts = useSelector(state => state.carts)

    const products = useSelector(state => state.products)

    console.log(carts)

    console.log(products)

    return (
        <section className="carts">
            <div className="container">
                <div className="carts__row">
                    {
                        products.data.filter(item => carts.data.some(el => el.id === item.id))
                            .map((item) => (
                                <div className="carts__col">
                                    <div className="carts_col_top">
                                        <img className="carts_col_top_img" src={item.img} alt=""/>
                                        <h3>{item.name}</h3>
                                        {item.price}
                                        <p>{item.discount}</p>
                                        {
                                            carts.data.some(el => el.id == item.id) ?
                                                <div className="catalog-cart">
                                                    <button onClick={() => dispatch(removeCart(item.id))} className="catalog-minus">-</button>
                                                    <input value={carts.data.find(el => el.id === item.id).count } className="catalog-input" type="text"/>
                                                    <button onClick={() => dispatch(addCart(item.id))} className="catalog-plus">+</button>
                                                </div> : <button onClick={() => dispatch(addCart(item.id))} className='products-col-btn'>
                                                    <p  className="products-col-btn-text">Купить в 1 клик</p>
                                                </button>
                                        }

                                    </div>
                                    <hr/>
                                    <div className="carts_col_bottom">
                                        <span>Комплектация: стандартная</span>
                                        <span>Гарантия: 1 год</span>
                                        <span>Тип покрышки: шоссейная</span>
                                        <span>Доп.услуги: гидроизоляция</span>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Cart;