import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Oxi",
  description: "Modern systems programming language",
  head: [
    ["link", { rel: "icon", href: "/oxi_logo.png" }],

    // Open graph
    ["meta", { property: "og:url", content: "https://oxilang.siesque.com/" }],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      { property: "og:title", content: "Oxi Programming Language | Oxi" },
    ],
    [
      "meta",
      {
        property: "og:description",
        content: "Modern systems programming language",
      },
    ],
    ["meta", { property: "og:image", content: "/oxi_logo.png" }],

    // Twitter
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:domain", content: "oxilang.siesque.com" }],
    [
      "meta",
      { property: "twitter:url", content: "https://oxilang.siesque.com/" },
    ],
    [
      "meta",
      { name: "twitter:title", content: "Oxi Programming Language | Oxi" },
    ],
    [
      "meta",
      {
        name: "twitter:description",
        content: "Modern systems programming language",
      },
    ],
    ["meta", { name: "twitter:image", content: "/oxi_logo.png" }],
  ],
  themeConfig: {
    nav: [{ text: "Documentation", link: "/docs/" }],
    socialLinks: [{ icon: "github", link: "https://github.com/septechx/oxi" }],
    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/docs/" },
          { text: "Installation", link: "/docs/installation" },
        ],
      },
    ],
  },
  sitemap: {
    hostname: "https://oxilang.siesque.com",
  },
});
