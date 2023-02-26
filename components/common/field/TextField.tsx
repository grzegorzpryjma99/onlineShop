import React from "react";
import {InputText} from "primereact/inputtext";
import {classNames} from "primereact/utils";
import {FormikType, isFormFieldInvalid} from "@/lib/FormikUtils";
import {PickByType} from "@/lib/TypeUtils";
import {FormField} from "@/components/common/field/FormField";

interface TextFieldProps<T> {
    formik: FormikType<T>
    fieldName: keyof PickByType<T, string>
    minLength?: number
    maxLength?: number
    className?: string
    disabled?: boolean
}

export const TextField = ({formik, fieldName, minLength, maxLength, className, disabled}: TextFieldProps<any>) => {

    return <FormField formik={formik} fieldName={fieldName} className={className}>
        <InputText id={fieldName} name={fieldName}
                   minLength={minLength} maxLength={maxLength}
                   value={formik.values[fieldName]} onChange={formik.handleChange} disabled={disabled}
                   className={classNames('block', 'w-full', {'p-invalid': isFormFieldInvalid(formik, fieldName)})}
        />
    </FormField>
}