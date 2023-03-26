import React from "react";
import SimpleProductCard from "@/components/home/SimpleProductCard";

interface PopularProductListProps {
    productNumber: number
}

const PopularProductList = (props: PopularProductListProps) => (
    <div className='listContainer'>
        <h2 className='title-h2'>Products</h2>
        <p className='description'>Order it for you or for your beloved ones </p>
        <div className='productList'>
            {Array.from({length: props.productNumber}, (_, index) => (
                <SimpleProductCard key={index}
                                   id={1}
                                   name='Nazwa'
                                   price={10}/>
            ))}
        </div>
    </div>
);

export default PopularProductList;