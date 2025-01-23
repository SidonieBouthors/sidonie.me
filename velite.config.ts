import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc, {
  HeadingNode,
  HtmlElementNode,
  TextNode,
} from "@jsdevtools/rehype-toc";
import rehypeExternalLinks from "rehype-external-links";
import remarkMath from "remark-math";
import rehypeMathJaxSvg from "rehype-mathjax";

const recipeComputedFields = <
  T extends {
    slug: string;
    prepTime?: number;
    cookTime?: number;
    waitTime?: number;
  }
>(
  data: T
) => ({
  ...data,
  // Extract the slug from the path
  extractedSlug: data.slug.split("/").slice(1).join("/"),
  totalTime: (data.prepTime || 0) + (data.cookTime || 0) + (data.waitTime || 0),
});

const recipes = defineCollection({
  name: "Recipe",
  pattern: "recipes/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      name: s.string().max(50),
      description: s.string().max(200).optional(),
      coverImage: s.image(),
      contentImage: s.image().optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      featured: s.boolean().default(false),
      tags: s.array(s.string()).optional(),
      yield: s.number(), // number of servings
      yieldUnit: s.string().optional(), // unit of the yield
      prepTime: s.number().optional(), // in minutes
      cookTime: s.number().optional(), // in minutes
      waitTime: s.number().optional(), // in minutes
      body: s.mdx(),
    })
    .transform(recipeComputedFields),
});

const postComputedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  // Extract the slug from the path
  extractedSlug: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Post",
  pattern: "share/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(40),
      description: s.string().max(200).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      publishedUnlisted: s.boolean().default(false),
      featured: s.boolean().default(false),
      tags: s.array(s.string()).default([]),
      body: s.mdx(),
    })
    .transform(postComputedFields),
});

const aboutSnippets = defineCollection({
  name: "AboutSnippet",
  pattern: "about/**/*.mdx",
  schema: s.object({
    slug: s.path(),
    title: s.string().max(40).optional(),
    icon: s.image().optional(),
    link: s.string().optional(),
    width: s.number().default(1),
    height: s.number().default(1),
    color: s.coerce
      .string()
      .transform((s) => s.padStart(6, "0"))
      .optional(),
    theme: s.string().optional(),
    priority: s.number().default(0),
    body: s.mdx(),
  }),
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
  collections: { recipes, posts, aboutSnippets },
  mdx: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ["noopener", "noreferrer"],
          target: "_blank",
        },
      ],
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark-dimmed",
            light: "github-light",
          },
          defaultLang: {
            block: "plaintext",
            inline: "plaintext",
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
      [
        rehypeToc,
        {
          headings: ["h2", "h3", "h4", "h5", "h6"],
        },
      ],
      [rehypeMathJaxSvg],
    ],
    remarkPlugins: [
      [
        remarkMath,
        {
          singleDollarTextMath: true,
        },
      ],
    ],
  },
});
