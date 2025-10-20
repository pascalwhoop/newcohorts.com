import { defineCollection, z } from 'astro:content';

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  'about': about,
};
