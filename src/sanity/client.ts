import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "14xc4c4f",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});