import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],

  // build: {
  //   transpile: ['@fullcalendar'],
  // },

  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: 'github-dark',
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5,
      },
    },
  },

  // https://v3.nuxtjs.org/migration/runtime-config#runtime-config
  runtimeConfig: {
    // Private config that is only available on the server
    apiSecret: '123',
    // Config within public will be also exposed to the client
    public: {
      appName: 'Tokyo Toolbox',
      appDescription:
        'Japan-centric DIY interior / exterior design tutorials, workshops, documentaries, interviews, reviews, podcasts, and exploration.',
      siteUrl: 'https://tokyotoolbox.com',
    },
  },
});
