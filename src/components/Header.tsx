import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { toggleCartVisibility, useCartItemsCount } from "../redux/cartSlice";
import "./Header.css";

const Header: FC = (props) => {
    const cartCount = useCartItemsCount();
    const dispatch = useDispatch();
    const handleCartVisibility = () => {
        dispatch(toggleCartVisibility());
    };
    return (
        <nav className="header">
            <div className="navbar">
                <div className="logo">Cart Demo</div>
                <div className="cart" onClick={handleCartVisibility}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="cart-count">
                        {cartCount ? cartCount : 0}
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Header;
