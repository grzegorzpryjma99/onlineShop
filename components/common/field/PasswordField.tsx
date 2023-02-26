
import {classNames} from "primereact/utils";
import React from "react";
import {Password} from "primereact/password";
import {FormikType, isFormFieldInvalid} from "@/lib/FormikUtils";
import {PickByType} from "@/lib/TypeUtils";
import {FormField} from "@/components/common/field/FormField";

export interface PasswordForm {
    password: string,
    repeatPassword: string,
}

interface PasswordFieldProps<T> {
    formik: FormikType<T>
    fieldName: keyof PickByType<T, string>
    minLength?: number
    maxLength?: number
    className?: string
    disabled?: boolean
}

export const PasswordField = ({
                                  formik,
                                  fieldName,
                                  minLength,
                                  maxLength,
                                  className,
                                  disabled
                              }: PasswordFieldProps<any>) => {

    return <FormField formik={formik} fieldName={fieldName} className={className}>
        <Password type="password"
                  id={fieldName} name={fieldName}
                  minLength={minLength} maxLength={maxLength}
                  feedback={false}
                  toggleMask
                  inputStyle={{width: 'inherit'}}
                  value={formik.values[fieldName]} onChange={formik.handleChange} disabled={disabled}
                  className={classNames('block', 'w-full', {'p-invalid': isFormFieldInvalid(formik, fieldName)})}/>
    </FormField>
}