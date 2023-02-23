import React, {useState} from "react";
import Image from "next/image";
import productPlaceholder from '/public/productPlaceholder.png'
import {InputNumber, InputNumberValueChangeEvent} from "primereact/inputnumber";
import UnderlineButton from "@/components/common/UnderlineButton";

interface ProductCartProps {
        id: number
        name: string
        price: number
}

const CartListProduct = (props: ProductCartProps) => {

    const [value, setValue] = useState<number>(1);

    return <div className='cart-product-container'>
        <div className='list-one'>
            <Image
                src={productPlaceholder}
                alt='Zdjecie produktu'
            />
            <div>
                <h3>{props.name}</h3>
                <UnderlineButton label='Remove' actionFunction={() => {}}/>
            </div>
        </div>
        <div className='list-two'>
            <p>{props.price} PLN</p>
        </div>
        <div className='list-three'>
                <InputNumber value={value}
                             className='count-input'
                             onValueChange={(e: InputNumberValueChangeEvent) => setValue(e.value || 1)}
                             showButtons
                             inputStyle={{width: '48px', borderTopColor: 'rgb(86, 178, 128)', borderBottomColor: 'rgb(86, 178, 128)', textAlign: 'center'}}
                             min={0}
                             buttonLayout="horizontal"
                             incrementButtonIcon="pi pi-plus"
                             decrementButtonIcon="pi pi-minus"/>
        </div>
        <div className='list-four'>
            total
        </div>
    </div>
}

export default CartListProduct;