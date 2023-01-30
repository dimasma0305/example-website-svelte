import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production"
        ? "/example-website-svelte"
        : "/example-website-svelte",
    },
    files: {
      lib: "src/lib",
      assets: "md",
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
