import React from 'react';
import {useSelector} from "react-redux";

const Cart = () => {

    const carts = useSelector(state => state.carts)

    const products = useSelector(state => state.products)

    return (
        <section className="carts">
            <div className="container">
                <div className="carts__row">
                    {
                        products.data.filter(item => carts.data.some(el => el.is === item.id))
                            .map((item) => (
                                <h1>{item.title}</h1>
                            ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Cart;