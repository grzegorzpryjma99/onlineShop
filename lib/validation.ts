import {Address, OrderInfo} from "@/lib/types";
import * as Yup from "yup";

export const orderInfoValidationSchema: Yup.Schema<OrderInfo> = Yup.object().shape({
    details: Yup.object().shape({
        contact: Yup.string().nullable().required("Pole wymagane"),
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
        shippingMethod: Yup.object(), // todo
    }),
    payment: Yup.object().shape({
        //todo
    }),
    couponCode: Yup.string()
});
