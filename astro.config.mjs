import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://iframe-resizer.com",
  integrations: [
    react(),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
    starlight({
      head: [
        // Fathom analytics script tag.
        {
          tag: "script",
          attrs: {
            src: "https://cdn.usefathom.com/script.js",
            "data-site": "VRVHUUQS",
            defer: true,
          },
        },
      ],
      title: "iframe-resizer",
      description: "Keep same and cross domain iframes sized to their content",
      favicon: "/favicon.ico",
      logo: {
        src: "/public/logo.svg",
        // alt: "iframe-resizer",
      },
      customCss: ["./src/styles/theme.css", "@fontsource/audiowide/400.css"],
      components: {
        SocialIcons: "./src/components/socials.astro",
      },
      social: {
        github: "https://github.com/davidjbradshaw/iframe-resizer",
      },
      sidebar: [
        {
          label: "Introduction",
          link: "introduction",
        },
        {
          label: "Licenses",
          link: "licenses",
        },
        {
          label: "Setup",
          link: "setup",
        },
        {
          label: "Performance",
          link: "performance",
        },
        {
          label: "API",
          items: [
            {
              label: "Parent Page",
              link: "/api/parent",
            },
            {
              label: "Child Page",
              link: "/api/child",
            },
          ],
        },
        {
          label: "Frameworks and Libraries",
          items: [
            {
              label: "Overview",
              link: "/frameworks/overview",
            },
            {
              label: "React",
              link: "/frameworks/react",
            },
            {
              label: "Vue",
              link: "/frameworks/vue3",
            },
            // { label: "Vue 2", link: "/frameworks/vue2" },
            {
              label: "jQuery",
              link: "/frameworks/jquery",
            },
            {
              label: "WordPress",
              link: "/frameworks/wordpress",
            },
            {
              label: "Google Apps Scripts",
              link: "/frameworks/google_apps_script",
            },
            // { label: "Angular", link: "/frameworks/angular" },
            // https://iframe-resizer.com/frameworks/wordpress/
            // {
            //   label: "Framework API",
            //   link: "/frameworks/api",
            // },
            {
              label: "Framework API",
              link: "/frameworks/api",
            },
          ],
        },
        {
          label: "Troubleshooting",
          link: "troubleshooting",
        },
        {
          label: "Upgrade to V5",
          link: "upgrade",
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],
});
