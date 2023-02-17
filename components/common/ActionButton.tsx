import React from "react";
import Link from "next/link";

interface ActionButtonProps {
    icon?: JSX.Element
    url: string
    label: string
}

const ActionButton = (props: ActionButtonProps) => (
    <div>
        <Link href={props.url}>
            <button className='action-button'>{props.icon} {props.label}</button>
        </Link>
    </div>
);

export default ActionButton;