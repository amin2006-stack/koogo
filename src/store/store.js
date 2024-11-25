import {configureStore} from "@reduxjs/toolkit";
import {rememberReducer, rememberEnhancer} from "redux-remember";
import products from "./reducers/products.js";
import favorites from "./reducers/favorites.js";
import carts from "./reducers/carts.js";

const rememberedKeys = [ 'products', 'user', 'favorites', 'carts'];

const store = configureStore({
    reducer: rememberReducer({
        products,
        favorites,
        carts
    }),
    enhancers: (getDefaultEnhancers)=>getDefaultEnhancers().concat(
        rememberEnhancer(
            window.localStorage,
            rememberedKeys
        )
    )
})

export default store
