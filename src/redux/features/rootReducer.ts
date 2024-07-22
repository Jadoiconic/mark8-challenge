
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favoriteReducer from "./favoriteSlice";

const rootReducer = combineReducers({
    cart: cartReducer,
    favorite: favoriteReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
