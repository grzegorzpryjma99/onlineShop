import React from "react";
import {classNames} from "primereact/utils";
import {InputTextarea} from "primereact/inputtextarea";
import {FormField} from "@/components/common/field/FormField";
import {PickByType} from "@/lib/TypeUtils";
import {FormikType, isFormFieldInvalid} from "@/lib/FormikUtils";

interface TextareaFieldProps<T> {
    formik: FormikType<T>
    fieldName: keyof PickByType<T, string>
    minLength?: number
    maxLength?: number
    className?: string
    disabled?: boolean
}

export const TextareaField = ({formik, fieldName, minLength, maxLength, className, disabled}: TextareaFieldProps<any>) => {

    return <FormField formik={formik} fieldName={fieldName} className={className}>
        <InputTextarea id={fieldName} name={fieldName} style={{height: '300px'}}
                   minLength={minLength} maxLength={maxLength}
                   value={formik.values[fieldName]} onChange={formik.handleChange} disabled={disabled}
                   className={classNames('block', 'w-full', {'p-invalid': isFormFieldInvalid(formik, fieldName)})}
        />
    </FormField>
}