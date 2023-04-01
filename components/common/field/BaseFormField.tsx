import {classNames} from "primereact/utils";
import React, {CSSProperties, PropsWithChildren} from "react";

interface BaseFormFieldProps<T> {
    className?: string
    label?: string
    help?: string
    isInvalid: any
    errorMsg: JSX.Element
    id: string
    style?: CSSProperties
}

export const BaseFormField = <T, >({
                                       id,
                                       className,
                                       label,
                                       help,
                                       errorMsg,
                                       isInvalid,
                                       style,
                                       children
                                   }: PropsWithChildren<BaseFormFieldProps<T>>) => {
    return <div style={style} className={"field " + (className ? className : "")}>
        {label && <label htmlFor={id} className={classNames('block', {'p-error': isInvalid})}>
            {label}
        </label>}
        {children}
        {help && <small id={id + "-help"} className="block">{help}</small>}
        {errorMsg}
    </div>
}