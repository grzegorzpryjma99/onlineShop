import React from "react";
import Link from "next/link";

interface UnderlineButtonProps {
    icon?: JSX.Element
    url?: string
    label: string
    actionFunction?: () => void;
}

const UnderlineButton = (props: UnderlineButtonProps) => (

    <div>
        {/*TODO: width on props*/}
        {!props.actionFunction && props.url
            ? <Link href={props.url}><button className='subline'>{props.icon} {props.label}</button></Link>
            : <button onClick={props.actionFunction} className='subline'>{props.icon} {props.label}</button>}
    </div>
);

export default UnderlineButton;