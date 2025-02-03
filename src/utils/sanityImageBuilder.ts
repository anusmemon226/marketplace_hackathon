import { client } from "@/sanity/client";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from "@sanity/image-url";
const { projectId, dataset } = client.config();

export const urlFor = (source: SanityImageSource) => {
    return (projectId && dataset) ? imageUrlBuilder({ projectId, dataset }).image(source) : null
}