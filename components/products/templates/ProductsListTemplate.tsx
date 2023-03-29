import {Paginator} from "primereact/paginator";
import React, {useEffect, useState} from "react";
import ProductList from "@/components/products/ProductList";
import {getPaginatedProductsWithFilter} from "@/lib/api/Api";
import {Product, ProductCategory, SortMode} from "@/components/products/types/types";
import {Dropdown} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";

interface ProductCategoryDropDown {
    name: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>,
    code: ProductCategory
}

interface SortModeDropDown {
    name: string,
    code: SortMode
}

const categories: ProductCategoryDropDown[] = [
    {name: <p><i className="pi pi-tag"/> Home</p>, code: ProductCategory.Home},
    {name: <p><i className="pi pi-tag"/> Garden</p>, code: ProductCategory.Garden},
];

const sortOptions: SortModeDropDown[] = [
    {name: 'Price High to Low', code: SortMode.High},
    {name: 'Price Low to High', code: SortMode.Low},
];

export default function ProductsListTemplate() {

    const productsOnPage = 8;
    const [actualPage, setActualPage] = useState(0);
    const [totalElement, setTotalElement] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<ProductCategoryDropDown | null>(null);
    const [searchProduct, setSearchProduct] = useState<string>("");
    const [sortMode, setSortMode] = useState<SortModeDropDown | null>(null);

    useEffect(() => {
        let {paginatedProducts, totalElement} = getPaginatedProductsWithFilter(
            actualPage,
            productsOnPage,
            selectedCategory != undefined ? selectedCategory.code : null,
            searchProduct,
            sortMode != undefined ? sortMode.code : null,
        );

        setProducts(paginatedProducts);
        setTotalElement(totalElement)
    }, [actualPage, selectedCategory, searchProduct, sortMode])

    useEffect(() => {
        setActualPage(0)
    }, [sortMode])

    return (
        <div className='products-list-template-container'>
            <i className="pi pi-check"/>
            <h2 className='title-h2'>Products</h2>
            <p className='description'>Order it for you or for your beloved ones </p>
            <div className='product-list-search-panel'>
                <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)}
                          options={categories}
                          optionLabel="name" placeholder="Select a Category"
                          showClear
                          filter className="w-full md:w-14rem"/>
                <span className="p-input-icon-left">
                    <i className="pi pi-search"/>
                    <InputText value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)}
                               placeholder='Search by Name'/>
                </span>
                <Dropdown value={sortMode} onChange={(e) => setSortMode(e.value)} options={sortOptions}
                          optionLabel="name"
                          showClear
                          placeholder="Sort By Price"/>
            </div>
            <ProductList products={products}/>
            <Paginator first={actualPage * productsOnPage} rows={productsOnPage} totalRecords={totalElement}
                       onPageChange={event => setActualPage(event.page)}
                       template={{layout: 'PrevPageLink CurrentPageReport NextPageLink'}}/>
        </div>
    )
}