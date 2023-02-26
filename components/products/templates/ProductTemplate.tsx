import React, {useState} from "react";
import Image from "next/image";
import productPlaceHolder from "/public/productPlaceholder.png"
import {Product} from "@/components/products/types/types";
import ActionButton from "@/components/common/button/ActionButton";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {InputNumber, InputNumberValueChangeEvent} from "primereact/inputnumber";

export type ProductProps = {
    product: Product
}

const ProductTemplate: React.VFC<ProductProps> = (props: ProductProps) => {

    const [quantity, setQuantity] = useState<number>(1)

    return <div className='product-wrapper'>
        <div className='product-container-box'>
            <div className='product-container'>
                <Image src={productPlaceHolder} alt=''/>
                <p className='description'>{props.product.description}</p>
            </div>
            <div className='product-container'>
                <h2 className='product-name'>{props.product.name}</h2>
                <div>
                    <p>{props.product.price} PLN</p>
                    <InputNumber value={quantity}
                                 className='count-input'
                                 onValueChange={(e: InputNumberValueChangeEvent) => setQuantity(e.value || 1)}
                                 showButtons
                                 inputStyle={{width: '48px', borderTopColor: 'rgb(86, 178, 128)', borderBottomColor: 'rgb(86, 178, 128)', textAlign: 'center'}}
                                 min={0}
                                 buttonLayout="horizontal"
                                 incrementButtonIcon="pi pi-plus"
                                 decrementButtonIcon="pi pi-minus"/>
                </div>
                <div>
                    {/*todo: cos tam*/}
                    <ActionButton icon={<FontAwesomeIcon icon={faCartShopping}/>}
                                  url='/'
                                  label='Add to cart'/>
                </div>
            </div>
        </div>
        <div className='product-details-box'>
            <p>Wax: Lorem Ipsum is simply dummy text of the</p>
            <p>Fragrance: Lorem Ipsum is simply dummy text of the</p>
            <p>Burning : Lorem Ipsum is simply dummy text of the</p>
            <p>Dimension : Lorem Ipsum is simply dummy text of the</p>
            <p>Weight : Lorem Ipsum is simply dummy text of the</p>
        </div>
    </div>
};

export default ProductTemplate;