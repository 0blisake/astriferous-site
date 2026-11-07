import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    constellation: z.string().optional(),
    idea: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
