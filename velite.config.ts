import { defineConfig, defineCollection, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  // Extract the slug from the path and remove the leading slash
  id: data.slug.split("/").slice(1).join("/"),
});

const recipes = defineCollection({
  name: "Recipe",
  pattern: "recipes/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      name: s.string().max(20),
      description: s.string().max(100).optional(),
      coverImage: s.image(),
      contentImage: s.image().optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/velite",
    base: "/velite/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { recipes },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
