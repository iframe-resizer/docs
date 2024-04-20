import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://iframe-resizer.com",
  integrations: [
    starlight({
      title: "",
      description: "Keep same and cross domain iFrames sized to their content",
      favicon: "/favicon.ico",
      logo: {
        src: "/public/logo.png",
        // alt: "iframe-resizer",
      },
      customCss: ["./src/styles/theme.css"],
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
          link: "license",
        },
        {
          label: "Getting Started",
          link: "getting_started",
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
              label: "Google Apps Scripts",
              link: "/frameworks/google_apps_script",
            },
            // { label: "Angular", link: "/frameworks/angular" },
            {
              label: "Ember",
              link: "/frameworks/ember",
            },
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
    react(),
  ],
});
