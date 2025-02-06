import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { NextResponse } from "next/server";
export async function GET() {
    const CUSTOMERS_QUERY = `*[_type == "customer"]{
            _id,
            email
          }`;
    const options = { next: { revalidate: 30 } };
    const customers = await client.fetch<SanityDocument[]>(CUSTOMERS_QUERY, {}, options);
    return NextResponse.json(customers)
}
export async function POST(request: Request) {
    const formData = await request.json()
    const customerData = {
        _type: "customer",
        address: formData.address,
        postal_code: formData.zipcode,
        email: formData.email,
        firstname: formData.firstname,
        lastname: formData.lastname,
        account_creation_date: new Date().toISOString(),
        username: formData.firstname.toLowerCase() + "" + formData.lastname.toLowerCase(),
        phone_number: formData.phone,
        city: {
            _ref: formData.city,
            _type: "reference"
        },
        country: {
            _ref: formData.country,
            _type: "reference"
        }
    }
    // const createCustomer = await client.create(customerData)
    return NextResponse.json(customerData)
}