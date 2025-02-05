import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "14xc4c4f",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: false,
  ignoreBrowserTokenWarning: true
});