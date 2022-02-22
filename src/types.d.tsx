export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: number;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}
export interface ICartItem extends IProduct {
    quantity: number;
}
export interface IReduxInitialState {
    products?: IProduct[];
    cartItems?: ICartItem[];
    isCartOpen: boolean;
    loading: boolean;
    error: boolean;
}
