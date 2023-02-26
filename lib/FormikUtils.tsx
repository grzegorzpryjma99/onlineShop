import {FormikErrors, FormikTouched} from "formik/dist/types";
import React from "react";

export type FormikType<T> = {
    errors: FormikErrors<T>,
    touched: FormikTouched<T>,
    values: T,
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    },
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<FormikErrors<T>> | Promise<void>;
    setValues: (values: React.SetStateAction<T>, shouldValidate?: boolean | undefined) => Promise<FormikErrors<T>> | Promise<void>;
}

export const isFormFieldValid = <T, >(formik: FormikType<T>, name: keyof T) => {
    return !!(formik.touched[name] && formik.errors[name]);
}
export const isFormFieldInvalid = <T, >(formik: FormikType<T>, name: keyof T) => {
    return formik.touched[name] && formik.errors[name];
}

export const isFormFieldInvalid2 = <T, >(errors: FormikErrors<T>, touched: FormikTouched<T>, name: keyof T): boolean => {
    return !!(touched[name] && errors[name]);
}

function buildErrorMsg<T>(errors: FormikErrors<T>, name: keyof T) {
    //@ts-ignore
    return <small className="p-error">{errors[name]}</small>;
}

export const getFormErrorMessage = <T, >(formik: FormikType<T>, name: keyof T) => {
    return isFormFieldInvalid(formik, name) && buildErrorMsg(formik.errors, name);
};

export const getFormErrorMessage2 = <T, >(errors: FormikErrors<T> | string | undefined, touched: FormikTouched<T> | undefined, name: keyof T): [isInvalid: boolean, errorMsg: JSX.Element] => {
    if (errors === undefined || touched === undefined || typeof errors === 'string') {
        return [false, <></>];
    }
    const invalid = isFormFieldInvalid2(errors, touched, name);
    const msg = invalid ? buildErrorMsg(errors, name) : <></>;
    return [invalid, msg];
};
