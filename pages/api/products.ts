import {products} from "@/lib/db/products";
import {NextApiRequest, NextApiResponse} from "next";

const getProducts = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(products);
}

export default getProducts;