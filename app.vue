<template>
	<div>
		<NavBar class="mb-5" />
		<NuxtPage />
		<footer class="footer bg-gray-200">
			<div class="container mx-auto px-4">
				<p class="py-4 text-center">{{ $t('copy') }}</p>
			</div>
		</footer>
	</div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';

export default {
	components: {
		NavBar
	}
};
</script>
