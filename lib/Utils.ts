import {Address, ShippingMethod} from "@/lib/types";
import {ProductCategory} from "@/components/products/types/types";

export const getFullAddress = (address: Address): string => {
    return `${address.country}, ${address.postalCode} ${address.city}, ${address.street} ${address.number}`
}

export const paymentMethodToPrice = (shippingMethod: ShippingMethod): string => {
    switch (shippingMethod) {
        case ShippingMethod.FREE_SHIPPING:
            return 'Free'
        case ShippingMethod.SELF_PICKUP:
            return 'Free'
        case ShippingMethod.STANDARD_SHIPPING:
            return '9.99 PLN'
    }
}

//TODO: tymczasowo
export const exampleProductList4 = [
    {
        "id": 1,
        "name": "Produkt9",
        "description": "All hand-made with natural soy wax, Candleaf is made for your pleasure moments.",
        "price": 87,
        "category": ProductCategory.Home
    },
    {
        "id": 2,
        "name": "Produkt1",
        "description": "All hand-made with natural soy wax, Candleaf is made for your pleasure moments.",
        "price": 99,
        "category": ProductCategory.Home
    },
    {
        "id": 3,
        "name": "Produkt1",
        "description": "All hand-made with natural soy wax, Candleaf is made for your pleasure moments.",
        "price": 12,
        "category": ProductCategory.Home
    },
    {
        "id": 4,
        "name": "Produkt1",
        "description": "All hand-made with natural soy wax, Candleaf is made for your pleasure moments.",
        "price": 44,
        "category": ProductCategory.Home
    }
]

//TODO: tymczasowo
export const exampleProductList8 = [
    {
        "id": 1,
        "name": "Produkt9",
        "description": "All hand-made with natural soy wax, Candleaf is made for your pleasure moments.",
        "price": 87,
        "category": ProductCategory.Home
    },
    {
        "id": 2,
        "name": "Produkt1",
        "description": "All hand-made with natural soy wax, Candleaf is made for your pleasure moments.",
        "price": 99,
        "category": ProductCategory.Home
    },
    {
        "id": 3,
        "name": "Produkt1",
        "description": "All hand-made with natural soy wax, Candleaf is made for your pleasure moments.",
        "price": 12,
        "category": ProductCategory.Garden
    },
    {
        "id": 4,
        "name": "Produkt1",
        "description": "All hand-made with natural soy wax, Candleaf is made for your pleasure moments.",
        "price": 44,
        "category": ProductCategory.Home
    },
    {
        "id": 5,
        "name": "Produkt1",
        "description": "All hand-made with natural soy wax, Candleaf is made for your pleasure moments.",
        "price": 765,
        "category": ProductCategory.Home
    },
    {
        "id": 6,
        "name": "Produkt1",
        "description": "All hand-made with natural soy wax, Candleaf is made for your pleasure moments.",
        "price": 342,
        "category": ProductCategory.Home
    },
    {
        "id": 7,
        "name": "Produkt1",
        "description": "All hand-made with natural soy wax, Candleaf is made for your pleasure moments.",
        "price": 34,
        "category": ProductCategory.Home
    },
    {
        "id": 8,
        "name": "Produkt1",
        "description": "All hand-made with natural soy wax, Candleaf is made for your pleasure moments.",
        "price": 94,
        "category": ProductCategory.Home
    }
]