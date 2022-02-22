import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { getProducts, toggleCartVisibility, useCart } from "./redux/cartSlice";

function App() {
    const dispatch = useDispatch();
    const { isCartOpen } = useCart();
    const handleCartVisibility = () => {
        dispatch(toggleCartVisibility());
    };
    useEffect(() => {
        const fetchProducts = () => {
            dispatch(getProducts());
        };
        fetchProducts();
    }, [dispatch]);
    return (
        <>
            <Header />
            <div className="main-container">
                <ProductList />
            </div>
            {isCartOpen && <Cart />}
            {isCartOpen && (
                <div className="backdrop" onClick={handleCartVisibility}></div>
            )}
        </>
    );
}

export default App;
