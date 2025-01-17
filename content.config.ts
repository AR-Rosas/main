import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  // Define collections for different types of content
  collections: {
    // Main content collection for pages
    pages: defineCollection({
      type: 'page',
      source: 'pages/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        image: z.string().optional(),
      })
    }),
    // Blog posts collection
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.array(z.string()).default([]),
        author: z.string().optional(),
        image: z.string().optional(),
      })
    }),
    // Services collection
    services: defineCollection({
      type: 'page',
      source: 'services/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        price: z.number().optional(),
        features: z.array(z.string()).default([]),
      })
    })
  }
}) 