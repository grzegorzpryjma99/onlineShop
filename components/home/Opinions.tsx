import React from "react";
import Image from "next/image";
import productPlaceholder from "public/productPlaceholder.png"
import SimpleProductCard from "@/components/home/SimpleProductCard";
import SimpleOpinionCard from "@/components/home/SimpleOpinionCard";

interface OpinionsProps {
}

const Opinions = (props: OpinionsProps) => (
    <div className='listContainer' style={{background: 'rgba(86, 178, 128, 0.1)'}}>
        <h2 className='title-h2'>Testimonials</h2>
        <p className='description'>Some quotes from our happy customers</p>
        <div className='productList'>
            <SimpleOpinionCard firstName='Edoardo' lastName='xd' comment='Raccomended for everyone' rate={4}/>
            <SimpleOpinionCard firstName='Edoardo' lastName='xd' comment='Raccomended for everyone' rate={5}/>
            <SimpleOpinionCard firstName='Edoardo' lastName='xd' comment='Raccomended for everyone' rate={5}/>
        </div>
    </div>
);

export default Opinions;