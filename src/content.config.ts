import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      image: z.string().optional()
    })
})

const about = defineCollection({
  // Load Markdown files in the `src/content/about/` directory.
  loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
  // Type-check frontmatter using a schema
  schema: z.object({})
})

const illustration = defineCollection({
  // Load Markdown and MDX files in the `src/content/illustration/` directory.
  loader: glob({ base: './src/content/illustration', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
      url: z.string().optional(),
      order: z.number().optional(),
      thumbnail: z.string().optional()
    })
})

const creativeCode = defineCollection({
  // Load Markdown and MDX files in the `src/content/creative-code/` directory.
  loader: glob({ base: './src/content/creative-code', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
      url: z.string().optional(),
      order: z.number().optional(),
      thumbnail: z.string().optional()
    })
})

const typeDesign = defineCollection({
  // Load Markdown and MDX files in the `src/content/type-design/` directory.
  loader: glob({ base: './src/content/type-design', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
      url: z.string().optional(),
      order: z.number().optional(),
      thumbnail: z.string().optional()
    })
})

export const collections = { posts, about, illustration, creativeCode, typeDesign }
