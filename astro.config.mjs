import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://iframe-resizer.com",
  redirects: {
    angular: "/frameworks/angular",
    react: "/frameworks/react",
    jquery: "/frameworks/jquery",
    vue: "/frameworks/vue3",
    vue2: "/frameworks/vue2",
    vue3: "/frameworks/vue3",
    wordpress: "/guides/wordpress",
    perf: "/setup/advanced#performance",
    setup: "/setup/parent",
    getting_started: "/introduction",
    buy: "/pricing",
    "frameworks/api": "/api/framework",
    "frameworks/overview": "/api",
    "/examples/&quot;&gt;examples": "/examples",
    "/upgrade&nbsp;for&nbsp;more&nbsp;details": "/upgrade",
    "/pricing.": "/pricing",
    "/pricing/n": "/pricing",
    "/perf%3C/%3E.": "/perf",
    "/setup/%3C/%3E": "/setup",
    "quirks-mode": "/troubleshooting#iframe-not-downsizing",
  },
  integrations: [
    react(),
    starlightLinksValidator(),
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
        {
          tag: "script",
          attrs: {
            src: "/js/fathom.js",
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
        Head: "./src/components/Head.astro",
        SocialIcons: "./src/components/socials.astro",
      },
      social: {
        github: "https://github.com/davidjbradshaw/iframe-resizer",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            {
              label: "Introduction",
              link: "introduction",
            },
            {
              label: "Licenses",
              link: "licenses",
            },
            {
              label: "Setup Parent Page",
              link: "/setup/parent",
            },
            {
              label: "Setup Child Page",
              link: "/setup/child",
            },
            {
              label: "Content Guidelines",
              link: "content_guidelines",
            },
            {
              label: "Third Party Parent Page",
              link: "/setup/thirdparty",
            },
            {
              label: "Advanced Setup",
              link: "/setup/advanced",
            },
            // {
            //   label: "Performance",
            //   link: "performance",
            // },
            {
              label: "Troubleshooting",
              link: "troubleshooting",
            },
            {
              label: "Upgrade to V5",
              link: "upgrade",
            },
          ],
        },
        {
          label: "Frameworks and Libraries",
          items: [
            {
              label: "Overview",
              link: "/frameworks",
            },
            {
              label: "React",
              link: "/frameworks/react",
            },
            {
              label: "Vue",
              link: "/frameworks/vue3",
            },
            {
              label: "Angular",
              link: "/frameworks/angular",
            },
            {
              label: "jQuery",
              link: "/frameworks/jquery",
            },
          ],
        },
        {
          label: "Platform Guides",
          items: [
            {
              label: "WordPress",
              link: "/guides/wordpress",
            },
            {
              label: "Google Apps Scripts",
              link: "/guides/google_apps_script",
            },
          ],
        },
        {
          label: "API",
          items: [
            {
              label: "Overview",
              link: "/api",
            },
            {
              label: "Parent Page API",
              link: "/api/parent",
            },
            {
              label: "Child Page API",
              link: "/api/child",
            },
            {
              label: "Framework API",
              link: "/api/framework",
            },
          ],
        },
        {
          label: "Accessibility",
          link: "accessibility",
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],
});
