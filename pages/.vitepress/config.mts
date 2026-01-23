import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Oxi",
  description: "Modern systems programming language",
  head: [["link", { rel: "icon", href: "/oxi_logo_white.webp" }]],
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
