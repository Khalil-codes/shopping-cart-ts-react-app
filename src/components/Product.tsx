import React, { FC } from "react";
import { IProduct } from "../types.d";
import "./Product.css";
type Props = {
    product: IProduct;
};

const Product: FC<Props> = ({ product }) => {
    return (
        <div className="product-container">
            <div className="img-container">
                <img
                    src={product.image}
                    alt="product-img"
                    className="product-img"
                />
            </div>
            <div className="product-details">
                <p className="name">{product.title.slice(0, 32)}...</p>
                <p className="price">$ {product.price}</p>
            </div>
            <div className="add-cart">
                <button className="add-cart-btn">Add to cart</button>
            </div>
        </div>
    );
};

export default Product;
