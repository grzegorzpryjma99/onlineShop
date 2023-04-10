import React, {useEffect, useState} from "react";
import OrderProductInfo from "@/components/order/OrderProductInfo";
import {InputText} from "primereact/inputtext";
import {CartProduct} from "@/components/cart/types";
import {FormikType} from "@/lib/FormikUtils";
import {OrderInfo} from "@/lib/types";
import {paymentMethodToPrice} from "@/lib/Utils";
import ActionButton from "@/components/common/button/ActionButton";
import useCart from "@/service/useCart";

interface ShoppingInfoProps {
    products?: CartProduct[]
    formik: FormikType<OrderInfo>
}

const ShoppingInfo = (props: ShoppingInfoProps) => {

    const {cart} = useCart();
    const [total, setTotal] = useState<number>(cart.totalAmount);
    const [couponDiscount, setCouponDiscount] = useState<boolean>(false);
    const [couponDiscountText, setCouponDiscountText] = useState<string>('');

    const handleCoupon = () => {
        if(couponDiscountText !== ''){
            setCouponDiscount(true)
        } else {
            setCouponDiscount(false)
        }
    }

    useEffect(() => {
        if (couponDiscount) {
            setTotal(total * 0.9)
        } else {
            setTotal(cart.totalAmount)
        }
    }, [couponDiscount])

    return <div className='shopping-info-wrapper'>
        <div className='shopping-product-section'>
            {props.products ? props.products?.map((product: CartProduct) => {
                return <OrderProductInfo key={product.product.id} product={product}/>
            }) : <p>Cart empty</p>}
        </div>
        <div>
            <div className='shopping-info-section'>
                <span style={{width: '100%'}} className="p-input-icon-left">
                    <i className="pi pi-dollar"/>
                    <InputText style={{width: '100%'}} onChange={e => setCouponDiscountText(e.target.value)} placeholder="Coupon code"/>
                </span>
                <ActionButton
                    divStyle={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '10px',
                        width: '25%'
                    }}
                    style={{margin: 0, width: '100%'}} label='Add code'
                    actionFunction={() => {
                        handleCoupon()
                    }}/>
            </div>
            {couponDiscount && <div className='shopping-info-section'>
                <p>Discount</p>
                <p className='description'>-10%</p>
            </div>}
            <div className='shopping-info-section'>
                <p>Shipping</p>
                <p className='description'>{props.formik.values.shipping.shippingMethod !== null ? paymentMethodToPrice(props.formik.values.shipping.shippingMethod) : 'Calculated at the next step'}</p>
            </div>
            <div className='shopping-info-section'>
                <p>Total</p>
                <p className='price'>{total} PLN</p>
            </div>
        </div>
    </div>
}

export default ShoppingInfo;