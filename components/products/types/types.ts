export interface Product {
    id: number
    name: string
    description: string
    price: number
    category: ProductCategory
}

export enum ProductCategory {
    Home="HOME",
    Garden="GARDEN"
}