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
