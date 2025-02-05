import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { NextResponse } from "next/server";

export async function GET() {
  const CITY_QUERY = `*[_type == "city"]{
        _id,
        city_name,
        slug,
        country->{
            _id,
            country_name
        }
      }`;
  const options = { next: { revalidate: 30 } };
  const city = await client.fetch<SanityDocument[]>(CITY_QUERY, {}, options);
  return NextResponse.json(city)
}