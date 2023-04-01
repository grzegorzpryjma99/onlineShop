import React, {CSSProperties, PropsWithChildren} from "react";
import {FormikType, getFormErrorMessage, isFormFieldInvalid} from "@/lib/FormikUtils";
import {BaseFormField} from "@/components/common/field/BaseFormField";


type FormFieldProps<T> = {
    className?: string
    formik: FormikType<T>
    fieldName: string & keyof T
    label?: string
    style?: CSSProperties
}

export const FormField = <T, >(props: PropsWithChildren<FormFieldProps<T>>) => {
    let id = props.fieldName;
    let label, errorMsg, isInvalid;
    label = props.label;
    errorMsg = getFormErrorMessage(props.formik, props.fieldName);
    isInvalid = isFormFieldInvalid(props.formik, props.fieldName);

    return <BaseFormField style={props.style} id={id} className={props.className}
                          label={label}
                          errorMsg={errorMsg}
                          isInvalid={isInvalid}>
        {props.children}
    </BaseFormField>

}