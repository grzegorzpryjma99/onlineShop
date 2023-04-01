import {Address, OrderInfo, PaymentMethod, ShippingMethod} from "@/lib/types";
import * as Yup from "yup";

export const orderInfoValidationSchema: Yup.Schema<OrderInfo> = Yup.object().shape({
    details: Yup.object().shape({
        contact: Yup.string().required("Pole wymagane"),
        shippingAddress: Yup.object().shape({
            firstName: Yup.string().nullable().required("Pole wymagane"),
            lastName: Yup.string().nullable().required("Pole wymagane"),
            shippingNote: Yup.string(),
            street: Yup.string().nullable().required("Pole wymagane"),
            number: Yup.number().nullable().required("Pole wymagane"),
            city: Yup.string().nullable().required("Pole wymagane"),
            postalCode: Yup.string().nullable().required("Pole wymagane"),
            country: Yup.string().nullable().required("Pole wymagane"),
        })
    }),
    shipping: Yup.object().shape({
        shippingMethod: Yup.mixed<ShippingMethod>().nullable().oneOf(Object.values(ShippingMethod)).required(),
    }),
    payment: Yup.object().shape({
        paymentMethod: Yup.mixed<PaymentMethod>().nullable().oneOf(Object.values(PaymentMethod)).required(),
    }),
    couponCode: Yup.string()
});
