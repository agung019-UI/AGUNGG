import { configureStore } from "@reduxjs/toolkit";
import cart from "@/redux/features/cartSlice";
import product from "@/redux/features/productSilce";
import loading from "@/redux/features/loadingSlice";
export const store = configureStore({
    reducer: {
        cart, 
        product,
        loading,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;