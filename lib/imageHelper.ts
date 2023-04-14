import image1 from "@/public/image 8.png";
import image2 from "@/public/image 7.png";
import image3 from "@/public/image 6.png";
import image4 from "@/public/image 5.png";
import image5 from "@/public/image 4.png";
import image6 from "@/public/image 3.png";
import image7 from "@/public/image 2.png";
import image8 from "@/public/image 1.png";
import {StaticImageData} from "next/image";

export let images = [image1, image2, image3, image4, image5, image6, image7, image8];

export const getImageById = (id: number): StaticImageData => {
    return images[Math.floor((id - 1) % 8)]
}