import React from "react";
import { useCart } from "../redux/cartSlice";
import Product from "./Product";
import "./ProductList.css";

type Props = {};

const ProductList = (props: Props) => {
    const { loading, products, error } = useCart();
    if (loading) return <div className="loading-container">Loading...</div>;
    if (error) return <div className="error-container">Error Occurred</div>;
    return (
        <div className="products-container">
            {products?.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
