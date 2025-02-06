// import { client } from "@/sanity/client";
// import { SanityDocument } from "next-sanity";
// import { NextResponse } from "next/server";
// export async function GET() {
//     const CUSTOMERS_QUERY = `*[_type == "customer"]{
//             _id,
//             email
//           }`;
//     const options = { next: { revalidate: 30 } };
//     const customers = await client.fetch<SanityDocument[]>(CUSTOMERS_QUERY, {}, options);
//     return NextResponse.json(customers)
// }
// export async function POST(request: Request) {
//     const formData = await request.json()
//     await client.mutate([
//         {
//             create: {
//                 _type: "customer",
//                 address: formData.address,
//                 postal_code: formData.zipcode,
//                 email: formData.email,
//                 firstname: formData.firstname,
//                 lastname: formData.lastname,
//                 account_creation_date: new Date().toISOString(),
//                 username: formData.firstname.toLowerCase() + "" + formData.lastname.toLowerCase(),
//                 phone_number: formData.phone,
//                 city: {
//                     _ref: formData.city
//                 },
//                 country: {
//                     _ref: formData.country
//                 }
//             }
//         }
//     ])
//     // return NextResponse.json(createCustomer)
//     return NextResponse.json({data:formData})
// }

import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const CUSTOMERS_QUERY = `*[_type == "customer"]{
            _id,
            email
        }`;
        const options = { next: { revalidate: 30 } };
        const customers = await client.fetch<SanityDocument[]>(CUSTOMERS_QUERY, {}, options);
        return NextResponse.json(customers);
    } catch (error) {
        console.error("Error fetching customers:", error);
        return NextResponse.json({ error: "Failed to fetch customers" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const formData = await request.json();

        // Mutation to create customer
        const createCustomer = await client.mutate([
            {
                create: {
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
                        _ref: formData.city
                    },
                    country: {
                        _ref: formData.country
                    }
                }
            }
        ]);

        // Check if createCustomer was successful and return proper response
        if (createCustomer && Array.isArray(createCustomer)) {
            return NextResponse.json({ transactionId: "12345", documentIds: createCustomer.map(doc => doc._id) });
        } else {
            throw new Error("Failed to create customer");
        }
    } catch (error) {
        console.error("Error creating customer:", error);
        return NextResponse.json({ error: "Failed to create customer" }, { status: 500 });
    }
}
