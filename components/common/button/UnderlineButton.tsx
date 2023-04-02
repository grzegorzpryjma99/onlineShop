import React, {CSSProperties} from "react";
import Link from "next/link";

interface UnderlineButtonProps {
    icon?: JSX.Element
    url?: string
    label: string
    actionFunction?: () => void;
    style?: CSSProperties
    divStyle?: CSSProperties
}

const UnderlineButton = (props: UnderlineButtonProps) => (
    <div style={props.divStyle}>
        {!props.actionFunction && props.url
            ? <Link href={props.url}>
                <button style={props.style} className='underline-subline'>{props.icon} {props.label}</button>
            </Link>
            : <button style={props.style} onClick={props.actionFunction}
                      className='underline-subline'>{props.icon} {props.label}</button>}
    </div>
);

export default UnderlineButton;