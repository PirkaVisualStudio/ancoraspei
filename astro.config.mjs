import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

import icon from "astro-icon";
import { defineConfig } from "astro/config";
//import site data
import siteInfo from "./src/data/siteInfo.json";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  site: `${siteInfo.map((i) => i.site_url)}`,
  integrations: [
    icon(),

    sitemap({
      filter: (page) =>
        page !== `${siteInfo.map((i) => i.not_included[0])}` &&
        page !== `${siteInfo.map((i) => i.not_included[1])}`,
    }),
    compress({
      CSS: false,
      HTML: false,
      Image: false,
      JavaScript: true,
      SVG: true,
    }),
  ],
});
