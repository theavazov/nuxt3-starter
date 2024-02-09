export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        code: "uz",
        name: "O'zbekcha",
      },
      {
        code: "en",
        name: "English",
      },
    ],
    defaultLocale: "uz",
    strategy: "prefix_except_default",
    detectBrowserLanguage: false,
  },
});
