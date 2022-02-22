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

export interface IReduxInitialState {
    products?: IProduct[];
    cartItems?: IProduct[];
    isCartOpen: boolean;
    loading: boolean;
    error: boolean;
}
