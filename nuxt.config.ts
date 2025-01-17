// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Core Configuration
  compatibilityDate: '2024-07-30',
  future: { 
    compatibilityVersion: 4 
  },

  // Modules
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@formkit/auto-animate',
    '@nuxt/content'
  ],

  // NuxtHub Configuration
  hub: {
    database: true,
    kv: true,
    blob: true,
    cache: true,
  },

  // Nitro Server Configuration
  nitro: {
    experimental: {
      openAPI: true
    }
  },

  // Development Tools
  devtools: { 
    enabled: true 
  },

  // UI Configuration
  ui: {
    global: true,
    safelistColors: [
      'primary',
      'blue',
      'red',
      'green',
      'yellow',
      'purple',
      'orange'
    ]
  },

  // Color Mode Settings
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  // Content Module Configuration
  // @ts-expect-error - Content module types
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    },
    
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3
        },
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark'
          }
        }
      }
    },
    

    watch: {
      ws: {
        port: 4000,
        showURL: true
      }
    }
  }
})