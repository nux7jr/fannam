// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/html-validator",
    "nuxt-security"
  ],
  security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
    },
    hidePoweredBy: true,
    enabled: false,
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: "ru"
    },
    vueI18n: "./i18n.config.ts",
  },
  googleFonts: {
    families: {
      "Mulish": {
        wght: [200, 300, 400, 500],
      },
    },
    preload: true,
  },
  app: {
    head: {
      title: "Fannam",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  css: [
    "~/assets/css/normalize.css",
    "~/assets/css/reset.css",
    // '~/assets/css/vars.css',
    "~/assets/css/main.css",
  ],
});
