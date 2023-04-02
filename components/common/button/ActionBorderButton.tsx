import React, {CSSProperties} from "react";
import Link from "next/link";

interface ActionBorderButtonProps {
    icon?: JSX.Element
    url?: string
    label: string
    actionFunction?: () => void;
    style?: CSSProperties
    divStyle?: CSSProperties
    divClassName?: string
}

const ActionBorderButton = (props: ActionBorderButtonProps) => (

    <div className={props.divClassName} style={props.divStyle}>
        {!props.actionFunction && props.url
            ? <Link href={props.url}>
                <button style={props.style} className='action-border-button'>{props.icon} {props.label}</button>
            </Link>
            : <button style={props.style} onClick={props.actionFunction}
                      className='action-border-button'>{props.icon} {props.label}</button>}
    </div>
);

export default ActionBorderButton;