import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.yoursite.hr/",
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
