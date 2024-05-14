import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

import { defineConfig } from "astro/config";

//import site data
import siteInfo from "./src/data/siteInfo.json";

// https://astro.build/config
export default defineConfig({
  site: `${siteInfo.map((i) => i.site_url)}`,
  integrations: [
    sitemap({
      filter: (page) =>
        page !== "https://yoursite.hr/kontakt/" &&
        page !== "https://yoursite.hr/hvala/" &&
        page !== "https://yoursite.hr/polica/",
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
