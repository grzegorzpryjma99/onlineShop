import React from "react";
import Link from "next/link";

interface ActionButtonProps {
    icon?: JSX.Element
    url?: string
    label: string
    actionFunction?: () => void;
}

const ActionButton = (props: ActionButtonProps) => (

    <div>
        {/*TODO: width on props*/}
        {!props.actionFunction && props.url
            ? <Link href={props.url}><button className='action-button'>{props.icon} {props.label}</button></Link>
            : <button onClick={props.actionFunction} className='action-button'>{props.icon} {props.label}</button>}
    </div>
);

export default ActionButton;