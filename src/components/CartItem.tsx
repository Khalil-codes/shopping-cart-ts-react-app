import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { ICartItem } from "../types.d";
import "./CartItem.css";

type Props = {
    cartItem: ICartItem;
};

const CartItem: FC<Props> = ({ cartItem }) => {
    const dispatch = useDispatch();
    const handleAddQuantity = () => {
        dispatch(addToCart(cartItem));
    };
    const handleRemoveQuantity = () => {
        dispatch(removeFromCart(cartItem));
    };
    return (
        <div className="cart-item-container">
            <div className="cart-item-detail">
                <div className="title">{cartItem.title}</div>
                <div className="prices-container">
                    <div className="single-price">
                        Price: $ {cartItem.price}
                    </div>
                    <div className="overall-price">
                        Total: $ {cartItem.price * cartItem.quantity}
                    </div>
                </div>
                <div className="action">
                    <button className="btn btn-add" onClick={handleAddQuantity}>
                        +
                    </button>
                    <div className="quantity">{cartItem.quantity}</div>
                    <button
                        className="btn btn-remove"
                        onClick={handleRemoveQuantity}>
                        -
                    </button>
                </div>
            </div>
            <div className="cart-item-img-container">
                <img
                    src={cartItem.image}
                    alt="cart-item-img"
                    className="cart-item-img"
                />
            </div>
        </div>
    );
};

export default CartItem;
