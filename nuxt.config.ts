import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxtjs/color-mode'],
	colorMode: {
		preference: 'dark', // domyślnie dark
		fallback: 'dark', // gdy brak wsparcia systemowego
		classSuffix: '', // używa klasy 'dark' (Tailwind)
	},
	css: ['~/assets/css/main.css'],
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:4000/api',
		},
	},
	// Jeśli robisz statyczny frontend:
	// ssr: false, // opcjonalnie (SPA)
	nitro: { prerender: { routes: [] } },
})
