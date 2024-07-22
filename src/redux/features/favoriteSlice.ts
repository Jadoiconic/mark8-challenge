// src/store/favoriteSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Favorite {
    productName: string;
    price: number;
    thumbnail: string;
    productId: string
}

interface FavoriteState {
    favorites: Favorite[];
}

const initialState: FavoriteState = {
    favorites: []
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Favorite>) => {
            const favorite = state.favorites.find(fav => action.payload.productName === fav.productName);
            if (favorite) {
                return;
            }
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(fav => fav.productName !== action.payload);
        }
    }
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
