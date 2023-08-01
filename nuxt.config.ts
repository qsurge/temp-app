// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  app: {
    baseURL: "/temp-app/",
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, "docs"),
    },
  },
  plugins: ["@/plugins/vue-gtag"],
});
