import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { NextResponse, } from "next/server";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const { slug } = await params
    const PRODUCT_QUERY = `*[_type == "product"&&slug.current=="${slug}"]{
        product_name,
        added_at,
        slug,
        main_image,
        rating,
        variation_details,
        price,
        description,
        product_images,
        stock,
        category->{
          category_name
        }
      }`;
    const options = { next: { revalidate: 30 } };
    const product = await client.fetch<SanityDocument[]>(PRODUCT_QUERY, {}, options);
    return NextResponse.json(product)
}