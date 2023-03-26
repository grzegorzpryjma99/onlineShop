import {Paginator, PaginatorPageChangeEvent} from "primereact/paginator";
import {useEffect, useState} from "react";
import ProductList from "@/components/products/ProductList";
import {getProducts} from "@/lib/api/Api";
import {Product} from "@/components/products/types/types";

export default function ProductsListTemplate() {

    const productsOnPage = 8;
    const [actualPage, setFirst] = useState(0);
    const [totalElement, setTotalElement] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        let {paginatedProducts, totalElement} = getProducts(actualPage, productsOnPage);
        setProducts(paginatedProducts);
        setTotalElement(totalElement)
    }, [actualPage])

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.page);
    };

    return (
        <div className='products-list-template-container'>
            <ProductList products={products}/>
            <Paginator first={actualPage * productsOnPage} rows={productsOnPage} totalRecords={totalElement}
                       onPageChange={onPageChange}
                       template={{layout: 'PrevPageLink CurrentPageReport NextPageLink'}}/>
        </div>
    )
}