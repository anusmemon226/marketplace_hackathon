export type productData = {
    added_at: string
    category: { category_name: string }
    description: string
    main_image: { _type: string, asset: { _ref: string, _type: string } }
    price: number
    product_images: {
        asset: {
            _ref: string,
            _type: string
        },
        _key: string,
        _type: string
    }[]
    product_name: string
    rating: number
    slug: { current: string, _type: string }
    stock: number
    variation_details: []
    _id: string
}

export type cartProduct = {
    quantity: number,
    variation: {
        variation_name:string
        variation_option:string
        _key:string
    }[],
    productData : productData
}