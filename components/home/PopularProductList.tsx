import React from "react";
import SimpleProductCard from "@/components/home/SimpleProductCard";
import {Product} from "@/components/products/types/types";

interface PopularProductListProps {
    products: Product[]
    title: string
    description: string
}

const PopularProductList = (props: PopularProductListProps) => (
    <div className='listContainer'>
        <h2 className='title-h2'>{props.title}</h2>
        <p className='description'>{props.description}</p>
        <div className='productList'>
            {props.products.map(product => {
                return <SimpleProductCard key={product.id}
                                          id={product.id}
                                          name={product.name}
                                          price={product.price}/>
            })}
        </div>
    </div>
);

export default PopularProductList;