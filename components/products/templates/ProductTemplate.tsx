import React, {useRef, useState} from "react";
import Image from "next/image";
import ActionButton from "@/components/common/button/ActionButton";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {InputNumber, InputNumberValueChangeEvent} from "primereact/inputnumber";
import {Toast} from "primereact/toast";
import useCart from "@/service/useCart";
import {images} from "@/lib/imageHelper";
import newsPlaceholder from "@/public/newsPhoto.png";
import {Galleria} from "primereact/galleria";
import {BackButton} from "@/components/common/button/BackButton";

const ProductTemplate = (props: any) => {

    const toast = useRef<Toast>(null);
    const [quantity, setQuantity] = useState<number>(1)
    const {addProductToCart} = useCart();


    const addToCart = () => {
        addProductToCart(props.product, quantity)
        toast.current?.show({
            severity: 'success',
            summary: 'Success',
            detail: `Added ${props.product.name} to cart`,
            life: 2000
        });
    }

    const itemTemplate = (item: any) => {
        return <Image priority src={item} alt='' style={{width: '100%', height: '100%'}}/>;
    }

    const thumbnailTemplate = (item: any) => {
        return <Image priority src={item} alt='' style={{width: '100%', height: '100%'}}/>;
    }

    return <div className='product-wrapper'>
        {/*TODO: ładniejszy layout*/}
        <Toast ref={toast}/>
        <BackButton />
        <div className='product-container-box'>
            <div className='product-container-left'>
                <Galleria value={images} numVisible={5} style={{width: '65%'}}
                          item={itemTemplate}
                          circular
                          autoPlay transitionInterval={3000}
                          thumbnail={thumbnailTemplate}/>
            </div>
            <div className='product-container-right'>
                <h2 className='product-name'>{props.product.name}</h2>
                <div>
                    {props.product.description}
                </div>
                <div className='product-details-section'>
                    <div>
                        <p className='price'>{props.product.price} PLN</p>
                        <div className='product-details-actions'>
                            <span>Quantity</span>
                            <InputNumber value={quantity}
                                         className='count-input'
                                         onValueChange={(e: InputNumberValueChangeEvent) => setQuantity(e.value || 1)}
                                         showButtons
                                         inputStyle={{
                                             width: '48px',
                                             borderTopColor: 'rgb(86, 178, 128)',
                                             borderBottomColor: 'rgb(86, 178, 128)',
                                             textAlign: 'center'
                                         }}
                                         min={1}
                                         buttonLayout="horizontal"
                                         incrementButtonIcon="pi pi-plus"
                                         decrementButtonIcon="pi pi-minus"/>
                        </div>
                    </div>
                    <div>
                        <ActionButton style={{width: '40%', margin: 0}}
                                      icon={<FontAwesomeIcon icon={faCartShopping}/>}
                                      actionFunction={addToCart}
                                      label='Add to cart'/>
                    </div>
                </div>
            </div>
        </div>
        {/*<div className='product-details-box'>*/}
        {/*    <p>Wax: Lorem Ipsum is simply dummy text of the</p>*/}
        {/*    <p>Fragrance: Lorem Ipsum is simply dummy text of the</p>*/}
        {/*    <p>Burning : Lorem Ipsum is simply dummy text of the</p>*/}
        {/*    <p>Dimension : Lorem Ipsum is simply dummy text of the</p>*/}
        {/*    <p>Weight : Lorem Ipsum is simply dummy text of the</p>*/}
        {/*</div>*/}
        <div className='learn-more-element-wrapper'>
            <div>
                <div>
                    <h2 className='h2-title'>Clean and fragrant soy wax</h2>
                    <span className='subline'>Made for your home and for your wellness</span>
                </div>
                <p className='learn-more-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
                <Image priority src={newsPlaceholder} alt='zdjecie informacyjne'/>
            </div>
        </div>
        <div className='learn-more-element-wrapper'>
            <div>
                <Image priority src={newsPlaceholder} alt='zdjecie informacyjne'/>
            </div>
            <div>
                <div>
                    <h2 className='h2-title'>Clean and fragrant soy wax</h2>
                    <span className='subline'>Made for your home and for your wellness</span>
                </div>
                <p className='learn-more-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
};

export default ProductTemplate;