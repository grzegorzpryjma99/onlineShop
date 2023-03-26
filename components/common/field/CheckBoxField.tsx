
import React from "react";
import {classNames} from "primereact/utils";
import {Checkbox} from "primereact/checkbox";
import {FormikType, isFormFieldInvalid} from "@/lib/FormikUtils";
import {PickByType} from "@/lib/TypeUtils";
import {FormField} from "@/components/common/field/FormField";

interface CheckBoxFieldProps<T> {
    formik: FormikType<T>
    fieldName: keyof PickByType<T, string>
    className?: string
    label: string
}

export const CheckBoxField = ({formik, fieldName, className, label}: CheckBoxFieldProps<any>) => {
    return <FormField formik={formik} fieldName={fieldName} className={className} label={label}>
        <Checkbox id={fieldName} name={fieldName}
                  checked={formik.values[fieldName]} onChange={formik.handleChange}
                  className={classNames('block', 'mr-1', {'p-invalid': isFormFieldInvalid(formik, fieldName)})}
        />
    </FormField>
}