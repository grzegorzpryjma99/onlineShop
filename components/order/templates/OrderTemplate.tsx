import React, {useEffect, useRef, useState} from "react";
import ShoppingInfo from "@/components/order/ShoppingInfo";
import {Steps} from "primereact/steps";
import ActionButton from "@/components/common/button/ActionButton";
import UnderlineButton from "@/components/common/button/UnderlineButton";
import logo from "/public/logo.png"
import Image from "next/image";
import Link from "next/link";
import OrderDetails from "@/components/order/OrderDetails";
import {OrderInfo} from "@/lib/types";
import {useFormik} from "formik";
import {orderInfoValidationSchema} from "@/lib/validation";
import {Cart} from "@/components/cart/types";
import CartService from "@/service/cartService";
import {Toast} from "primereact/toast";
import ShippingDetails from "@/components/order/ShippingDetails";
import PaymentDetails from "@/components/order/PaymentDetails";
import {Dialog} from "primereact/dialog";

const OrderTemplate = () => {

    const toast = useRef<Toast>(null);
    const [dialogVisible, setDialogVisible] = useState<boolean>(false);
    const {getCart, savedCart} = CartService();
    const [products, setProducts] = useState<Cart>()
    const [totalCost, setTotalCost] = useState<number>(0)
    const formik = useFormik<OrderInfo>({
        initialValues: {
            details: {
                contact: '',
                shippingAddress: {
                    firstName: '',
                    lastName: '',
                    shippingNote: '',
                    street: '',
                    number: null,
                    city: '',
                    postalCode: '',
                    country: '',
                }
            },
            shipping: {
                shippingMethod: null
            },
            payment: {
                paymentMethod: null
            },
            couponCode: ''
        },
        validationSchema: orderInfoValidationSchema,
        onSubmit: (data) => {
            //action
            formik.resetForm();
        }
    });
    console.log(formik.values)

    useEffect(() => {
        setProducts(getCart())
    }, [savedCart])

    const items = [
        {
            label: 'Details',
            command: (event: any) => {
            }
        },
        {
            label: 'Shipping',
            command: (event: any) => {
            }
        },
        {
            label: 'Payment',
            command: (event: any) => {
            }
        }
    ];

    const [activeTab, setActiveTab] = useState(0)

    const renderStep = (activeTab: number) => {
        switch (activeTab) {
            case 0:
                return <OrderDetails formik={formik}/>;
            case 1:
                return <ShippingDetails formik={formik}/>
            case 2:
                return <PaymentDetails formik={formik}/>
        }
    }

    const handleGoToShipping = () => {
        formik.validateForm().then(errors => {
            if (Object.keys(errors).length === 0) {
                setActiveTab(1)
            } else {
                console.log(errors)
                console.log('masz bledy')
            }
        });
    }

    const renderButton = (activeTab: number) => {
        switch (activeTab) {
            case 0:
                return <ActionButton style={{width: '100%'}} label='Go to Shipping'
                                     actionFunction={() => {
                                         handleGoToShipping()
                                         // setActiveTab(1)
                                     }}/>
            case 1:
                return <ActionButton style={{width: '100%'}} label='Go to Payment'
                                     actionFunction={() => setActiveTab(2)}/>
            case 2:
                return <ActionButton style={{width: '100%'}} actionFunction={handleOrder} label='Pay now'/>
        }
    }

    const renderBackButton = (activeTab: number) => {
        switch (activeTab) {
            case 0:
                return <UnderlineButton
                    divStyle={{
                        textAlign: 'left',
                        alignItems: 'center',
                        display: 'flex'
                    }}
                    url='/koszyk' label='Back to cart'/>
            case 1:
                return <UnderlineButton
                    divStyle={{
                        textAlign: 'left',
                        alignItems: 'center',
                        display: 'flex'
                    }}
                    label='Back to Details'
                    actionFunction={() => setActiveTab(0)}/>
            case 2:
                return <UnderlineButton
                    divStyle={{
                        textAlign: 'left',
                        alignItems: 'center',
                        display: 'flex'
                    }}
                    label='Back to Shipping'
                    actionFunction={() => setActiveTab(1)}/>
        }
    }

    const handleOrder = () => {
        setDialogVisible(true)
    }

    return <>
        <div className='order-container'>
            <Toast ref={toast}/>

            <div className='order-steps-wrapper'>
                <div>
                    <Link href='/'><Image className='logo' src={logo} alt='logo'/></Link>
                    <Steps model={items} activeIndex={activeTab} onSelect={(e) => setActiveTab(e.index)}
                           readOnly={false}/>
                </div>
                <div className='order-step-content'>
                    {renderStep(activeTab)}
                </div>
                <div className='order-button-wrapper'>
                    {renderBackButton(activeTab)}
                    {renderButton(activeTab)}
                </div>
            </div>
            <div className='order-summarize'>
                <ShoppingInfo formik={formik} products={products?.products.map(products => products)}/>
            </div>
        </div>
        <Dialog className='dialog' closable={false}
                header="Info"
                visible={dialogVisible}
                onHide={() => {
                }}
                footer={<ActionButton url='/' style={{width: '25%'}} label={'Ok'}/>}>
            <p>Function not implemented, thanks for testing</p>
        </Dialog>
    </>
}

export default OrderTemplate;