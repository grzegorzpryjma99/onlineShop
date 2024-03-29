import React, {CSSProperties} from "react";
import Link from "next/link";

interface ActionButtonProps {
    icon?: JSX.Element
    url?: string
    label: string
    actionFunction?: () => void;
    style?: CSSProperties
    divStyle?: CSSProperties
    divClassName?: string
}

const ActionButton = (props: ActionButtonProps) => (

    <div className={props.divClassName} style={props.divStyle}>
        {!props.actionFunction && props.url
            ? <Link href={props.url}>
                <button style={props.style} className='action-button'>{props.icon} {props.label}</button>
            </Link>
            : <button style={props.style} onClick={props.actionFunction}
                      className='action-button'>{props.icon} {props.label}</button>}
    </div>
);

export default ActionButton;