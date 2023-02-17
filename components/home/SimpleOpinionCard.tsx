import React from "react";
import Image from "next/image";
import userPlaceholder from "public/userPlaceholder.png"

const SimpleOpinionCard = () => (
    <div className='opinion-card'>
        <Image src={userPlaceholder} alt='zdjecie użytkownika'/>
        <div className='opinion-card-details'>
            <h3>“Raccomended for everyone”</h3>
            <p>Edoardo</p>
        </div>
    </div>
);

export default SimpleOpinionCard;