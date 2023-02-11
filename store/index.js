import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
	state: () => ({
		themeMode: 'light'
	}),
	getters: {},
	actions: {
		toggleTheme(mode) {
			this.themeMode = mode;

			if (mode == 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}
});
