export interface OrderInfo {
    details: Details
    shipping: Shipping
    payment: Payment
    couponCode?: string
}

export interface Details {
    contact: string
    shippingAddress: Address
}

export interface Shipping {

}

export interface Payment {

}

export interface Address {
    firstName: string
    lastName: string
    shippingNote?: string
    street: string
    number: number | null
    city: string
    postalCode: string
    country: string
}
