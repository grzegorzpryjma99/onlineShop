import React from "react";
import {TextField} from "@/components/common/field/TextField";
import {FormikType} from "@/lib/FormikUtils";
import {OrderInfo} from "@/lib/types";

interface OrderDetailsProps {
    formik: FormikType<OrderInfo>
}

const OrderDetails = (props: OrderDetailsProps) => {
    let formik = props.formik;

    return <div className=''>
        <h2>Contact</h2>
        <TextField formik={formik} placeholder='Email or mobile phone number' fieldName='details.contact'/>
        <h2>Shipping Address</h2>
        <TextField formik={formik} placeholder='Name' fieldName='details.shippingAddress.firstName'/>
        <TextField formik={formik} placeholder='Second Name' fieldName='details.shippingAddress.lastName'/>
        {/*//input*/}
        <TextField formik={formik} placeholder='Shipping note (optional)' fieldName='details.shippingAddress.shippingNote'/>
        <TextField formik={formik} placeholder='Address and number' fieldName='details.shippingAddress.street'/>
        <TextField formik={formik} placeholder='City' fieldName='details.shippingAddress.city'/>
        <TextField formik={formik} placeholder='Postal Code' fieldName='details.shippingAddress.postalCode'/>
        <TextField formik={formik} placeholder='Country' fieldName='details.shippingAddress.country'/>
    </div>
}

export default OrderDetails;