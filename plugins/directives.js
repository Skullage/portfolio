export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.directive('intersection', {
		mounted(el) {
			const options = {
				root: null,
				rootMargin: '0px',
				threshold: 0.5
			};

			const callback = (entries, observer) => {
				if (entries[0].isIntersecting) {
					entries[0].target.classList.add('show');
					observer.unobserve(entries[0].target);
				}
			};

			const observer = new IntersectionObserver(callback, options);
			observer.observe(el);
		},
		getSSRProps(binding, vnode) {
			// you can provide SSR-specific props here
			return {};
		}
	});
});
