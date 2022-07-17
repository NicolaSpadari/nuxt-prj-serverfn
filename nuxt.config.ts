import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    modules: ["nuxt-server-fn", "@unocss/nuxt"],
    unocss: {
        preflight: true
    }
});
