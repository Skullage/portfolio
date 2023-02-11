<template>
	<header
		class="header sticky top-0 z-50 mb-10 bg-white py-2 shadow-[0_5px_5px_-5px_rgba(34,60,80,0.6)] dark:bg-black"
	>
		<div class="container mx-auto px-4">
			<div class="flex items-center justify-between gap-8">
				<div class="logo flex-initial">
					<a href="/" class="logo__link"
						><img src="/img/logo.svg" alt="Logo" class="logo__img dark:invert"
					/></a>
				</div>
				<nav class="menu hidden flex-1 md:block">
					<ul class="menu__list flex justify-end gap-2.5">
						<li
							class="menu__item dark:invert"
							v-for="(item, index) in menuLinks"
							:key="index"
						>
							<NuxtLink
								:to="item.link"
								class="menu__link relative cursor-pointer p-2 font-bold uppercase"
								>{{ item.title }}</NuxtLink
							>
						</li>
					</ul>
				</nav>
				<div class="flex gap-4">
					<Icon
						v-if="$i18n.locale != 'ru'"
						icon="flagpack:ru"
						width="30"
						height="30"
						@click="$i18n.locale = 'ru'"
						class="cursor-pointer"
					/>
					<Icon
						v-if="$i18n.locale != 'en'"
						icon="flagpack:gb-nir"
						width="30"
						height="30"
						@click="$i18n.locale = 'en'"
						class="cursor-pointer"
					/>
					<Icon
						v-if="store.themeMode != 'dark'"
						icon="fluent:dark-theme-24-regular"
						width="30"
						height="30"
						class="cursor-pointer"
						@click="store.toggleTheme('dark')"
					/>
					<Icon
						v-else
						icon="fluent:dark-theme-24-regular"
						width="30"
						height="30"
						class="cursor-pointer"
						style="color: white"
						@click="store.toggleTheme('light')"
					/>

					<button
						class="menu__mobile-button relative z-50 md:hidden"
						@click="isMobileMenuActive = !isMobileMenuActive"
					>
						<Icon
							icon="uil:bars"
							:class="{ hidden: isMobileMenuActive }"
							height="30"
							width="30"
							class="dark:invert"
						/>
						<Icon
							icon="fa6-solid:xmark"
							:class="{ hidden: !isMobileMenuActive }"
							height="30"
							width="30"
						/>
					</button>
				</div>
			</div>
			<div
				class="mobile-menu absolute top-0 left-0 h-screen w-screen -translate-y-full duration-700"
				:class="{ menu__list_active: isMobileMenuActive }"
			>
				<nav class="menu h-full">
					<ul
						class="menu__list flex h-full flex-col items-center justify-center gap-2.5 bg-blue-400"
					>
						<li
							class="menu__item"
							v-for="(item, index) in menuLinks"
							:key="index"
						>
							<NuxtLink
								:to="item.link"
								class="menu__link relative cursor-pointer p-2 font-bold uppercase"
								@click="isMobileMenuActive = false"
								>{{ item.title }}</NuxtLink
							>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
import { Icon } from '@iconify/vue';
import { useThemeStore } from '@/store/index';

export default {
	components: {
		Icon
	},
	setup() {
		return { store: useThemeStore() };
	},
	data() {
		return {
			menuLinks: [
				{ title: this.$t('about'), link: '#about' },
				{ title: this.$t('skills'), link: '#skills' },
				{ title: this.$t('projects'), link: '#projects' }
			],
			isMobileMenuActive: false
		};
	},
	watch: {
		'$i18n.locale'(newVal, oldVal) {
			this.menuLinks = [
				{ title: this.$t('about'), link: '#about' },
				{ title: this.$t('skills'), link: '#skills' },
				{ title: this.$t('projects'), link: '#projects' }
			];
		}
	}
};
</script>

<style scoped>
.menu__link::after {
	content: '';
	background-color: black;
	position: absolute;
	z-index: -1;
	inset: 90% 0 0 0;
	transition: 0.3s;
	border-radius: 5px;
}
.menu__link:hover {
	font: 500 3rem;
	color: white;
}
.menu__link:hover::after {
	inset: 0 0 0 0;
}
.menu__list_active {
	@apply translate-y-0 opacity-100;
}
</style>
