// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
      postgres_conn_string : process.env.DB_CONNECTION_POSTGRES,
      saltRounds:5,
      jwt:{
        jwrSecret:'JWTSCRENT@1233456.@#$%^&',
        jwtExpireTime:3600
      }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules:[
    '@nuxtjs/eslint-module',
    'nuxt-primevue'
  ],
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { from: path.resolve(__dirname, './presets/lara/') }  
}
})
