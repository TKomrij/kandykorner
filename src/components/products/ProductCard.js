import React from "react"
import "./Product.css"

export const ProductCard = ({product}) => (
    <section className="product">
        <h3 className="product__id">Product ID: {product.id}</h3>
        <div className="product__name">Name: {product.name}</div>
        <div className="product__price">Price: {product.price}</div>
        <div className="product__typeId">Type ID: {product.typeId}</div>
    </section>
)