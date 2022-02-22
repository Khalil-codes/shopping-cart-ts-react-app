import { ICartItem, IProduct } from "../types.d";

export const addItemToCart = (
    cartItems: ICartItem[],
    cartItemToAdd: IProduct
) => {
    const existingCartItem = cartItems?.find(
        (cartItem: IProduct) => cartItem.id === cartItemToAdd.id
    );
    if (existingCartItem) {
        return cartItems.map((cartItem: ICartItem) =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    if (cartItems) return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    else return [{ ...cartItemToAdd, quantity: 1 }];
};
export const removeItemFromCart = (
    cartItems: ICartItem[],
    cartItemToRemove: ICartItem
) => {
    const existingCartItem: ICartItem | undefined = cartItems?.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem?.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};
