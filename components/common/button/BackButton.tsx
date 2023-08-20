import React from "react";
import {useRouter} from "next/router";

export const BackButton = () => {
    const router = useRouter();
    return <button className='underline-subline' style={{padding: "1em 0em 0em 1em"}} onClick={() => router.back()}>
        <i className={`pi pi-arrow-left`} style={{fontSize: '1.6rem'}}/>
    </button>
}