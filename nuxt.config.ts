// https://nuxt.com/docs/api/configuration/nuxt-config
//ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "~/assets/css/main.scss" as *;'
  //       }
  //     }
  //   }
  // }
  css: ["~/assets/css/index.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
