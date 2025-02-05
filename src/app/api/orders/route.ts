import { client } from "@/sanity/client";
import { NextResponse } from "next/server";
const generateKey = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
export async function POST(request: Request) {
    const formData = await request.json()
    console.log(formData)
    const order_items = formData.productData.map((order_item: any,index:number) => {
        return {
            _key: generateKey(),
            product: {
                _ref: order_item.product
            },
            quantity: order_item.quantity,
            variation: order_item.variation,
            price: String(order_item.price)
        }
    })
    const createOrder = client.mutate([
        {
            create: {
                _type: "order",
                customer: {
                    _ref: formData.customer
                },
                order_items: order_items,
                total_price: String(formData.total_price),
                order_note: formData.order_note,
                order_status: "pending",
                order_date: new Date().toISOString()
            }
        }
    ])
    return NextResponse.json(await createOrder)
}