export default defineNuxtConfig({
	ssr: false,
	modules: ['@nuxt/image-edge', '@pinia/nuxt'],
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			'postcss-import': {},
			'tailwindcss/nesting': 'postcss-nesting',
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	plugins: ['~/plugins/directives.js'],
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1.0',
			title: 'Портфолио',
			meta: [{ name: 'description', content: 'Сайт-портфолио.' }],
			bodyAttrs: {
				class: 'bg-white dark:bg-dark'
			},
			htmlAttrs: {
				lang: 'ru'
			}
		}
	}
});
