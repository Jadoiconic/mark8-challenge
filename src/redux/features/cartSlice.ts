import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    productName: string;
    price: number;
    quantity: number;
}

interface CartState {
    products: Product[];
}

const initialState: CartState = {
    products: [
        { productName: "iPhone", price: 400000, quantity: 2 },
        { productName: "iPad", price: 80000, quantity: 1 },
        { productName: "Headset", price: 8000, quantity: 4 },
    ]
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
