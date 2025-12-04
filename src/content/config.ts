// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const reviewsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) => z.object({
    name: z.string(),
    from: z.string(),
    full: z.string(),
    short: z.string(),

  
}),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'reviews': reviewsCollection,
};