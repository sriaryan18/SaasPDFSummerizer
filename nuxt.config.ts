// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import lara from './presets/lara'
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
      postgres_conn_string : process.env.DB_CONNECTION_POSTGRES,
      saltRounds:5,
      jwt:{
        jwrSecret:'JWTSCRENT@1233456.@#$%^&',
        jwtExpireTime:3600
      },
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
    'nuxt-primevue',
    '@pinia/nuxt',
  ],
  primevue: {
    options: {
      unstyled: true,
      pt:lara
    },
    importPT: { as: 'Lara',from: path.resolve(__dirname, './presets/lara/') }  
  },
  pinia:{
    storesDirs:['./stores/**']
  },
  components:[
    {
      path:'~/components/Auth',
      prefix:'Auth'
    },
    '~/components'
  ],
  ssr:false,
  // imports: {
  //   dirs: ['pages/auth/components']
  // }
  // hooks:{
  //   "components:dirs" : (dirs) => {
  //     dirs.push({
  //       path:'./pages/auth',
  //       prefix:'Auth'
  //     })
  //   }
  // }
  
})
