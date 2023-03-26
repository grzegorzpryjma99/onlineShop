import React from "react";
import SimpleProductCard from "@/components/home/SimpleProductCard";
import {Product} from "@/components/products/types/types";

interface PopularProductListProps {
    products: Product[]
}

const ProductList = (props: PopularProductListProps) => (
    <div className='product-list-container'>
        <h2 className='title-h2'>Products</h2>
        <p className='description'>Order it for you or for your beloved ones </p>
        <div className='productList'>
            {props.products.map((product, key) => {
                return <SimpleProductCard key={key}
                                   id={product.id}
                                   name={product.name}
                                   price={product.price}/>
            })}
        </div>
    </div>
);

export default ProductList;