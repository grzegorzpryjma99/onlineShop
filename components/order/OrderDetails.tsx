import React from "react";
import {TextField} from "@/components/common/field/TextField";
import {FormikType} from "@/lib/FormikUtils";
import {OrderInfo} from "@/lib/types";

interface OrderDetailsProps {
    formik: FormikType<OrderInfo>
}

const OrderDetails = (props: OrderDetailsProps) => {
    return <div className='order-details-wrapper'>
        <h2>Contact</h2>
        <TextField formik={props.formik} placeholder='Email or mobile phone number' fieldName='details.contact'/>
        <h2>Shipping Address</h2>
        <TextField formik={props.formik} placeholder='Name' fieldName='details.shippingAddress.firstName'/>
        <TextField formik={props.formik} placeholder='Second Name' fieldName='details.shippingAddress.lastName'/>
        {/*//input*/}
        <TextField formik={props.formik} placeholder='Shipping note (optional)'
                   fieldName='details.shippingAddress.shippingNote'/>
        <TextField formik={props.formik} placeholder='Address' fieldName='details.shippingAddress.street'/>
        <TextField formik={props.formik} placeholder='Number' fieldName='details.shippingAddress.number'/>
        <TextField formik={props.formik} placeholder='City' fieldName='details.shippingAddress.city'/>
        <TextField formik={props.formik} placeholder='Postal Code' fieldName='details.shippingAddress.postalCode'/>
        <TextField formik={props.formik} placeholder='Country' fieldName='details.shippingAddress.country'/>
    </div>
}

export default OrderDetails;