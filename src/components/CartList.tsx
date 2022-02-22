import React from "react";
import { useCart } from "../redux/cartSlice";
import CartItem from "./CartItem";
import "./CartList.css";
type Props = {};

const CartList = (props: Props) => {
    const { cartItems } = useCart();
    return (
        <div className="cart-list-container">
            {!cartItems?.length ? (
                <span className="empty-msg">No Items</span>
            ) : (
                cartItems?.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))
            )}
        </div>
    );
};

export default CartList;
