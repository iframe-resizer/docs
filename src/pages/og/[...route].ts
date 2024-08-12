import { OGImageRoute } from "astro-og-canvas"

export const { getStaticPaths, GET } = OGImageRoute({
  // Tell us the name of your dynamic route segment.
  // In this case it’s `route`, because the file is named `[...route].ts`.
  param: "route",

  // Pass the glob result to pages
  pages: await import.meta.glob("/src/pages/*.astro", { eager: true }),

  // Extract `title` and `description` from the glob result’s `frontmatter` property
  getImageOptions: (_path, page) => ({
    // Use the page title and description as the image title and description.
    title: page.title,
    description: page.description,
    // Customize various colors and add a border.
    bgGradient: [[24, 24, 27]],
    border: { color: [63, 63, 70], width: 20 },
    padding: 120,
  }),
})
