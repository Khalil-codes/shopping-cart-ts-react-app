import React from "react";
import { useCartItemsCount, useCartItemsTotal } from "../redux/cartSlice";
import "./Cart.css";
import CartList from "./CartList";

const Cart = () => {
    const cartCount = useCartItemsCount();
    const cartTotal = useCartItemsTotal();
    return (
        <div className="cart-container">
            <div className="cart-title">
                Your Shopping Cart: {cartCount ? `(${cartCount})` : ""}
            </div>
            <CartList />
            <div className="cart-total">
                Total: {cartTotal ? `$ ${cartTotal}` : "0"}
            </div>
        </div>
    );
};

export default Cart;
