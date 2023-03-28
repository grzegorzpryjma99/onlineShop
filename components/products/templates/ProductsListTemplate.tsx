import {Paginator, PaginatorPageChangeEvent} from "primereact/paginator";
import React, {useEffect, useState} from "react";
import ProductList from "@/components/products/ProductList";
import {getPaginatedProductsWithFilter} from "@/lib/api/Api";
import {Product, ProductCategory} from "@/components/products/types/types";
import {Dropdown} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";

interface ProductCategoryDropDown {
    name: string,
    code: ProductCategory
}

export default function ProductsListTemplate() {

    const productsOnPage = 8;
    const [actualPage, setFirst] = useState(0);
    const [totalElement, setTotalElement] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<ProductCategoryDropDown | null>(null);
    const [searchProduct, setSearchProduct] = useState<string>("");

    useEffect(() => {
        let {
            paginatedProducts,
            totalElement
        } = getPaginatedProductsWithFilter(actualPage, productsOnPage, selectedCategory != undefined ? selectedCategory.code : null, searchProduct);
        setProducts(paginatedProducts);
        setTotalElement(totalElement)
    }, [actualPage, selectedCategory, searchProduct])

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.page);
    };

    const categories: ProductCategoryDropDown[] = [
        {name: 'Home', code: ProductCategory.Home},
        {name: 'Garden', code: ProductCategory.Garden},
    ];

    return (
        <div className='products-list-template-container'>
            <h2 className='title-h2'>Products</h2>
            <p className='description'>Order it for you or for your beloved ones </p>
            <div className='product-list-search-panel'>
                <Dropdown value={selectedCategory} onChange={(e) => {

                    setSelectedCategory(e.value)
                }}
                          options={categories}
                          optionLabel="name" placeholder="Select a Category"
                          showClear
                          filter className="w-full md:w-14rem"/>
                <span className="p-input-icon-left">
                    <i className="pi pi-search"/>
                    <InputText value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)}
                               placeholder='Search by Name'/>
                </span>
            </div>
            <ProductList products={products}/>
            <Paginator first={actualPage * productsOnPage} rows={productsOnPage} totalRecords={totalElement}
                       onPageChange={onPageChange}
                       template={{layout: 'PrevPageLink CurrentPageReport NextPageLink'}}/>
        </div>
    )
}