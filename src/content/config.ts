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
    image: image(),
  
}),
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
      title: z.string(),
      index: z.string(),
      description: z.string(),
      description_og: z.string(),
      category: z.string(),
      year: z.string(),
      image: image(),
      imageAlt: z.string(),
      cilj: z.string(),
      ciljContent: z.string(),
      strategija: z.string(),
      strategijaContent: z.string(),
      keywords: z.string(),
      id: z.string(),
      draft: z.boolean(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
      title: z.string(),
      index: z.string(),
      description: z.string(),
      description_og: z.string(),
      category: z.enum(['dizajn', 'foto', 'video','marketing']),
      tags: z.array(z.string()),
      date: z.date(),
      image: image(),
      imageAlt: z.string(),
      keywords: z.string(),
      id: z.string(),
      draft: z.boolean(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'reviews': reviewsCollection,
  'projects': projects,
    'blog': blog,
};