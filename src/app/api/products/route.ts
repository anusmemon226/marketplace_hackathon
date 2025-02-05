import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { NextResponse } from "next/server";
export async function GET() {
  const PRODUCTS_QUERY = `*[_type == "product"]{
        _id,
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
  const products = await client.fetch<SanityDocument[]>(PRODUCTS_QUERY, {}, options);
  return NextResponse.json(products)
}