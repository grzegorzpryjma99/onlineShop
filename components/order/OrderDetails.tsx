import React from "react";
import {TextField} from "@/components/common/field/TextField";
import {FormikType} from "@/lib/FormikUtils";
import {OrderInfo} from "@/lib/types";

interface OrderDetailsProps {
    formik: FormikType<OrderInfo>
}
// firstName: string
// lastName: string
// shippingNote?: string
// street: string
// number: number | null
// city: string
// postalCode: string
// country: string
const OrderDetails = (props: OrderDetailsProps) => {
    let formik = props.formik;

    return <div className=''>
        <h2>Contact</h2>
        <TextField formik={formik} fieldName='details.contact'/>
        <h2>Shipping Address</h2>
        <TextField formik={formik} fieldName='details.shippingAddress.firstName'/>
        <TextField formik={formik} fieldName='details.shippingAddress.lastName'/>
        {/*//input*/}
        <TextField formik={formik} fieldName='details.shippingAddress.shippingNote'/>
        <TextField formik={formik} fieldName='details.shippingAddress.street'/>
        <TextField formik={formik} fieldName='details.shippingAddress.city'/>
        <TextField formik={formik} fieldName='details.shippingAddress.postalCode'/>
        <TextField formik={formik} fieldName='details.shippingAddress.country'/>
    </div>
}

export default OrderDetails;