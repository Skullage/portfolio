<template>
	<div>
		<NavBar class="mb-5" />
		<NuxtPage />
		<footer class="footer bg-gray-200 dark:bg-black dark:text-white">
			<div class="container mx-auto px-4">
				<p class="py-4 text-center">{{ $t('copy') }}</p>
			</div>
		</footer>
	</div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import { useThemeStore } from '@/store/index';

export default {
	components: {
		NavBar
	},
	setup() {
		return { store: useThemeStore() };
	},
	created() {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			this.store.toggleTheme('dark');
		}
	}
};
</script>
