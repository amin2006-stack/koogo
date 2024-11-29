import React, { useEffect, useState } from "react";
import accum from "../../assets/accum.svg";
import power from "../../assets/power.svg";
import speed from "../../assets/speed.svg";
import timer from "../../assets/timer.svg";
import shoppingCart from "../../assets/shoppingCart.svg";
import favorite from "../../assets/favorite.svg";
import Pagination from "@mui/material/Pagination";
import "./Products.scss";
import { useDispatch, useSelector } from "react-redux";
import { changePage, getAllProducts } from "../../store/reducers/products.js";
import { animateScroll as scroll } from "react-scroll";
import FilterPrice from "../Category/FilterPrice.jsx";
import { toggleFavorites } from "../../store/reducers/favorites.js";
import { addCart, removeCart } from "../../store/reducers/carts.js";

const Products = () => {
  const { data, status, error, filter } = useSelector(
    (state) => state.products
  );
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getAllProducts(filter.filterPrice));
  }, [filter.filterPrice]);

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

        <FilterPrice className="filter-price" />

        <div className="products-row">
          {data
            .filter((item, idx) => {
              return idx >= filter.page * 8 - 8 && idx < filter.page * 8;
            })
            .map((item) => (
              <div key={item.id} className="products-col">
                <div className="products-col-img"></div>

                <h4 className="products-col-title">{item.name}</h4>

                <div className="products-col-infoOne">
                  <img className="products-col-info-img" src={accum} alt="" />
                  <span className="products-col-info-text">
                    {item.battery} mAh
                  </span>
                  <img className="products-col-info-img" src={power} alt="" />
                  <span className="products-col-info-text">
                    {item.power} л.с.
                  </span>
                </div>

                <div className="products-col-infoOne">
                  <img className="products-col-info-img" src={speed} alt="" />
                  <span className="products-col-info-textt">
                    {item.speed} км/ч
                  </span>
                  <img className="products-col-info-img" src={timer} alt="" />
                  <span className="products-col-info-text">
                    {item.time} часов
                  </span>
                </div>

                <div className="products-col-infoTwo">
                  <div className="products-col-infoTwo-left">
                    <p className="products-col-price">{item.price}</p>
                    <p className="products-col-discount">{item.discount}</p>
                  </div>
                  <div className="products-col-infoTwo-right">
                    <img
                      className="products-col-infoTwo-rightt"
                      src={shoppingCart}
                      alt=""
                    />
                    <p
                      onClick={() => dispatch(toggleFavorites(item.id))}
                      className="catalog__card-like"
                    >
                      <svg
                        width="21"
                        height="18"
                        viewBox="0 0 21 18"
                        fill={`${
                          favorites.data.includes(item.id)
                            ? "#ff0000"
                            : "#ffffff"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.31802 2.31802C4.07538 0.56066 6.92462 0.56066 8.68198 2.31802L10.5 4.13604L12.318 2.31802C14.0754 0.56066 16.9246 0.56066 18.682 2.31802C20.4393 4.07538 20.4393 6.92462 18.682 8.68198L10.5 16.864L2.31802 8.68198C0.56066 6.92462 0.56066 4.07538 2.31802 2.31802Z"
                          stroke="#0F303F"
                          stroke-linecap="round"
                        />
                      </svg>
                    </p>
                  </div>
                </div>

                {carts.data.some((el) => el.id == item.id) ? (
                  <div className="catalog-cart">
                    <button
                      onClick={() => dispatch(removeCart(item.id))}
                      className="catalog-minus"
                    >
                      -
                    </button>
                    <input
                      value={carts.data.find((el) => el.id === item.id).count}
                      className="catalog-input"
                      type="text"
                    />
                    <button
                      onClick={() => dispatch(addCart(item.id))}
                      className="catalog-plus"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => dispatch(addCart(item.id))}
                    className="products-col-btn"
                  >
                    <p className="products-col-btn-text">Купить в 1 клик</p>
                  </button>
                )}
              </div>
            ))}
        </div>

        <div className="products-catalog">
          <Pagination
            onChange={(event, page) => {
              dispatch(changePage(page));
              scroll.scrollTo(800);
            }}
            page={filter.page}
            count={Math.ceil(data.length / 8)}
            variant="outlined"
            shape="rounded"
          />
        </div>

        <button className="products-end-btn">
          <p className="products-end-text">Смотреть все</p>
        </button>
      </div>
    </div>
  );
};

export default Products;
