// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    port: 3009,
  },

  output: "hybrid",

  adapter: node({
    mode: "standalone",
  }),
});