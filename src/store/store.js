<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import user from "./user/user";
import { rememberReducer, rememberEnhancer } from "redux-remember";

const rememberedKeys = ["products", "user"];

export const store = configureStore({
  reducer: rememberReducer({
    user,
  }),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(
      rememberEnhancer(window.localStorage, rememberedKeys)
    ),
});
=======
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
>>>>>>> 7ba5d557bd08b0272c8e2b69e73eb43bb653e68e
