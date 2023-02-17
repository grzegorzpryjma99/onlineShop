import React from "react";
import Image from "next/image";
import productPlaceHolder from "/public/productPlaceholder.png"
import {Product} from "@/components/products/types/types";
import ActionButton from "@/components/common/ActionButton";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export type ProductProps = {
    product: Product
}

const Product: React.VFC<ProductProps> = (props: ProductProps) => {

    return <div className='product-container'>
        <div className='product-container-box'>
            <Image src={productPlaceHolder} alt=''/>
            <p className='description'>{props.product.description}</p>
        </div>
        <div className='product-container-box'>
            <h2 className='product-name'>{props.product.name}</h2>
            <p>{props.product.price} PLN</p>
            <ActionButton icon={<FontAwesomeIcon icon={faCartShopping}/>}
                          url='/'
                          label='Add to cart'/>
            <div className='product-details-box'>
                <p>Wax: Lorem Ipsum is simply dummy text of the</p>
                <p>Fragrance: Lorem Ipsum is simply dummy text of the</p>
                <p>Burning : Lorem Ipsum is simply dummy text of the</p>
                <p>Dimension : Lorem Ipsum is simply dummy text of the</p>
                <p>Weight : Lorem Ipsum is simply dummy text of the</p>
            </div>
        </div>
    </div>
};

export default Product;