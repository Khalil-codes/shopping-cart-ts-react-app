import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { IProduct, IReduxInitialState } from "../types.d";
import { RootState } from "./store";

export const getProducts = createAsyncThunk("getProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
});

const initialState: IReduxInitialState = {
    isCartOpen: false,
    loading: false,
    error: false,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCartVisibility: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(
            getProducts.fulfilled,
            (state, action: PayloadAction<IProduct[]>) => {
                state.products = action.payload;
                state.loading = false;
            }
        );
        builder.addCase(getProducts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    },
});

export const useCart = () => useSelector((state: RootState) => state.cart);
export const { toggleCartVisibility } = cartSlice.actions;
export default cartSlice.reducer;
