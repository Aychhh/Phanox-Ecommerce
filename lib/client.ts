import { createClient } from "@sanity/client"
import  imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId : 'n4cb5g40',
    dataset : 'production',
    apiVersion : '2026-01-06',
    useCdn : true,
    token : process.env.NEXT_PUBLIC_SANITY_TOKEN
});


const builder = imageUrlBuilder(client);


export const urlFor = (source : any) => builder.image(source)

