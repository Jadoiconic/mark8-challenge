
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    productName: string;
    price: number;
    quantity: number;
    thumbnail: string
}

interface CartState {
    products: Product[];
}

const initialState: CartState = {
    products: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            const product = state.products.find(product => action.payload.productName === product.productName);
            if (product) {
                return;
            }
            state.products.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(product => product.productName !== action.payload);
        },
        incrementQuantity: (state, action: PayloadAction<string>) => {
            const product = state.products.find(product => product.productName === action.payload);
            if (product) {
                product.quantity += 1;
            }
        },
        decrementQuantity: (state, action: PayloadAction<string>) => {
            const product = state.products.find(product => product.productName === action.payload);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },
        clearCart: (state) => {
            state.products = [];
        }
    }
});

export const { addProduct, removeProduct, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
