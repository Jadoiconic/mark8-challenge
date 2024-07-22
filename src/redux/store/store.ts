
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features/rootReducer";
import { loadState, saveState } from "./localStorage";


const preloadedState = loadState();


const store = configureStore({
  reducer: rootReducer,
  preloadedState
});


store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    favorite: store.getState().favorite
  });
});


export default store;


export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
