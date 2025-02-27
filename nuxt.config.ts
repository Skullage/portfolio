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
			meta: [
				{ name: 'description', content: 'Сайт-портфолио.' },
				{ name: 'yandex-verification', content: 'b073de82edf40a7f' },
				{
					name: 'google-site-verification',
					content: 'Qt7OUMqB8HIuU9GjylRB_tiCrhMzu0HkEysRfbI69tU'
				}
			],
			bodyAttrs: {
				// class: ''
			},
			htmlAttrs: {
				lang: 'ru'
			}
		}
	}
});
