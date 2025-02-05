import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { NextResponse } from "next/server";

export async function GET() {
  const COUNTRY_QUERY = `*[_type == "country"]{
        _id,
        country_name,
        slug
      }`;
  const options = { next: { revalidate: 30 } };
  const country = await client.fetch<SanityDocument[]>(COUNTRY_QUERY, {}, options);
  return NextResponse.json(country)
}