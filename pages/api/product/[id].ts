import {products} from "@/lib/db/products";
import {NextApiRequest, NextApiResponse} from "next";

const getById = (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
    } = req;

    const selectedProduct = products.find((product) => product.id === Number(id));

    if (!selectedProduct) {
        res.status(404).json({ message: `Product with ID ${id} not found`});
    } else {
        res.status(200).json(selectedProduct);
    }
};

export default getById;