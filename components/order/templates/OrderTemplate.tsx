import {useEffect, useState} from "react";
import {Product} from "@/components/products/types/types";
import ShoppingInfo from "@/components/order/ShoppingInfo";
import {Steps} from "primereact/steps";
import ActionButton from "@/components/common/ActionButton";
import UnderlineButton from "@/components/common/UnderlineButton";
import logo from "/public/logo.png"
import Image from "next/image";
import Link from "next/link";
import {BreadCrumb} from "primereact/breadcrumb";

export default function OrderTemplate() {

    const [products, setProducts] = useState<Product[]>([])
    const [totalCost, setTotalCost] = useState<number>(0)

    useEffect(() => {
        setProducts([
            {
                id: 1,
                name: 'Produkt1',
                description: 'All hand-made with natural soy wax, Candleaf is made for your pleasure moments.',
                price: 99
            },
            {
                id: 1,
                name: 'Produkt1',
                description: 'All hand-made with natural soy wax, Candleaf is made for your pleasure moments.',
                price: 99
            },
        ])
    }, [])

    const items = [
        {
            label: 'Cart',
            command: (event: any) => {
            }
        },
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
                return <p>step 1</p>
            case 1:
                return <p>step 2</p>
            case 2:
                return <p>step 3</p>
            case 3:
                return <p>step 4</p>
        }
    }

    const renderButton = (activeTab: number) => {
        switch (activeTab) {
            case 0:
                return <ActionButton label='Go to Details' actionFunction={() => setActiveTab(1)}/>
            case 1:
                return <ActionButton label='Go to Shipping' actionFunction={() => setActiveTab(2)}/>
            case 2:
                return <ActionButton label='Go to Payment' actionFunction={() => setActiveTab(3)}/>
            case 3:
                return <ActionButton url='/' label='Pay now'/>
        }
    }

    const renderBackButton = (activeTab: number) => {
        switch (activeTab) {
            case 0:
                return <UnderlineButton url='/' label='Back to shopping'/>
            case 1:
                return <UnderlineButton label='Back to Cart' actionFunction={() => setActiveTab(0)}/>
            case 2:
                return <UnderlineButton label='Back to Details' actionFunction={() => setActiveTab(1)}/>
            case 3:
                return <UnderlineButton label='Back to Shipping' actionFunction={() => setActiveTab(2)}/>
        }
    }


    return (
        <div className='order-container'>
            <div className='order-steps-wrapper'>
                <div>
                    <Link href='/'><Image className='logo' src={logo} alt='logo'/></Link>
                    <Steps model={items} activeIndex={activeTab} onSelect={(e) => setActiveTab(e.index)} readOnly={false}/>
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
                <ShoppingInfo products={products}/>
            </div>
        </div>
    )
}