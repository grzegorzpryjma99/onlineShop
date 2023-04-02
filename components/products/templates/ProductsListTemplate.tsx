import {Paginator} from "primereact/paginator";
import React, {useEffect, useState} from "react";
import ProductList from "@/components/products/ProductList";
import {getPaginatedProductsWithFilter} from "@/lib/api/Api";
import {Product, ProductCategory, SortMode} from "@/components/products/types/types";
import {Dropdown} from "primereact/dropdown";
import {InputText} from "primereact/inputtext";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ActionBorderButton from "@/components/common/button/ActionBorderButton";

interface ProductCategoryDropDown {
    name: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>,
    code: ProductCategory
}

interface SortModeDropDown {
    name: string,
    code: SortMode
}

const categories: ProductCategoryDropDown[] = [
    {name: <p><i className="pi pi-tag"/> Home</p>, code: ProductCategory.HOME},
    {name: <p><i className="pi pi-tag"/> Garden</p>, code: ProductCategory.GARDEN},
];

const sortOptions: SortModeDropDown[] = [
    {name: 'Price High to Low', code: SortMode.High},
    {name: 'Price Low to High', code: SortMode.Low},
];

const ProductsListTemplate = () => {

    const productsOnPage: number = 12;
    const [products, setProducts] = useState<Product[]>([]);
    const [actualPage, setActualPage] = useState<number>(0);
    const [totalElement, setTotalElement] = useState<number>(0);
    const [selectedCategory, setSelectedCategory] = useState<ProductCategoryDropDown | null>(null);
    const [searchProduct, setSearchProduct] = useState<string>("");
    const [sortMode, setSortMode] = useState<SortModeDropDown | null>(null);

    useEffect(() => {
        getPaginatedProductsWithFilter(
            actualPage,
            productsOnPage,
            selectedCategory != undefined ? selectedCategory.code : null,
            searchProduct,
            sortMode != undefined ? sortMode.code : null,
        ).then(res => {
            setProducts(res.paginatedProducts);
            setTotalElement(res.totalElement)
        });
    }, [actualPage, selectedCategory, searchProduct, sortMode])

    useEffect(() => {
        setActualPage(0)
    }, [sortMode])

    const handleFind = () => {
        //TODO: implement search onClick
    }

    return <div className='products-list-template-container'>
        <h2 className='title-h2'>Products</h2>
        <p className='description'>Order it for you or for your beloved ones </p>
        <div className='product-list-search-panel'>
            <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)}
                      options={categories}
                      optionLabel="name" placeholder="Select a Category"
                      showClear
                      filter className="w-full md:w-14rem"/>
            <Dropdown value={sortMode} onChange={(e) => setSortMode(e.value)} options={sortOptions}
                      optionLabel="name"
                      showClear
                      placeholder="Sort By Price"/>
            <span className="p-input-icon-left">
                <i className="pi pi-search"/>
                <InputText value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)}
                           placeholder='Search by Name'/>
            </span>
            <ActionBorderButton icon={<FontAwesomeIcon icon={faMagnifyingGlass}/>}
                                style={{width: '100%', height: '100%', margin: 0, fontSize: '18px'}}
                                actionFunction={handleFind}
                                label='Find Product'/>
        </div>
        <ProductList products={products}/>
        <Paginator first={actualPage * productsOnPage} rows={productsOnPage} totalRecords={totalElement}
                   onPageChange={event => setActualPage(event.page)}
                   template={{layout: 'PrevPageLink CurrentPageReport NextPageLink'}}/>
    </div>
}

export default ProductsListTemplate