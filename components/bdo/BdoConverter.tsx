import React from "react";
import Image from "next/image";
import newsPlaceholder from "@/public/newsPhoto.png";
import LocalStorage from "@/components/bdo/LocalStorage";

const BdoConverter = () => {

    return <div className='products-list-template-container'>
        <LocalStorage/>
    </div>
}

export default BdoConverter;