<template>
	<main class="scrollbar">
		<div class="container mx-auto px-4">
			<section
				class="section hello mb-20 flex flex-wrap gap-10 overflow-hidden md:min-h-screen md:items-center md:justify-around"
				id="about"
				v-intersection
			>
				<div class="hello__text slide-right max-lg:order-1">
					<div class="about mb-8">
						<h2 class="mb-3 text-3xl font-bold dark:text-white">
							{{ $t('greeting') }}
						</h2>
						<p class="dark:text-white">{{ $t('prof') }}</p>
					</div>
					<div class="contacts mb-10">
						<div class="contacts__phone mb-1 flex gap-x-3">
							<h5
								class="contacts__title w-24 flex-initial font-bold uppercase dark:text-white"
							>
								{{ $t('phone') }}
							</h5>
							<a href="tel:79279348061" class="text-gray-500 underline"
								>+79279348061</a
							>
						</div>
						<div class="contacts__email mb-1 flex gap-x-3">
							<h5
								class="contacts__title w-24 flex-initial font-bold uppercase dark:text-white"
							>
								E-mail
							</h5>
							<a
								href="mailto:dogonadze1999@mail.ru"
								class="text-gray-500 underline"
								>dogonadze1999@mail.ru</a
							>
						</div>
						<div class="contacts__social social flex items-center gap-x-3">
							<h5
								class="contacts__title w-24 flex-initial font-bold uppercase dark:text-white"
							>
								{{ $t('social') }}
							</h5>
							<ul class="contacts__social-list social__list flex gap-2">
								<li class="social__item">
									<a href="http://vk.com/skullage" class="social__link">
										<Icon
											icon="cib:vk"
											width="32"
											height="32"
											class="rounded-full text-sky-700 duration-500 hover:text-black dark:bg-white dark:hover:bg-black dark:hover:text-white"
										/>
									</a>
								</li>
								<li class="social__item">
									<a href="https://t.me/skullage" class="social__link">
										<Icon
											icon="simple-icons:telegram"
											width="32"
											height="32"
											class="rounded-full text-sky-600 duration-500 hover:text-black dark:bg-white dark:hover:bg-black dark:hover:text-white"
										/>
									</a>
								</li>
								<li class="social__item">
									<a href="https://github.com/skullage" class="social__link">
										<Icon
											icon="carbon:logo-github"
											width="32"
											height="32"
											class="rounded-full bg-white text-black invert duration-500 hover:invert-0"
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="flex gap-5">
						<button
							class="rounded border border-indigo-600 px-3 py-3.5 text-center text-black duration-500 hover:bg-indigo-600 hover:text-white"
							@click="showModal('modal1')"
							v-if="false"
						>
							Связаться со мной
						</button>
						<a
							class="rounded border border-gray-200 bg-transparent px-3 py-3.5 text-center text-black duration-500 hover:bg-dark hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
							href="/files/Summary.pdf"
							target="_blank"
						>
							{{ $t('downloadCV') }}
						</a>
					</div>
				</div>
				<div class="hello__photo-wrapper slide-left">
					<nuxt-img
						src="/img/myPhoto.png"
						alt="Мое фото"
						class="h-full rounded"
						format="webp"
					/>
				</div>
			</section>
			<section
				class="section skills mb-20 flex flex-col justify-center overflow-hidden dark:text-white md:min-h-screen"
				v-intersection
				id="skills"
			>
				<h2 class="mb-6 text-center text-3xl font-bold">
					{{ $t('skills') }}
				</h2>
				<div class="flex flex-wrap gap-10">
					<div class="soft-skills flex-1 text-center">
						<h3 class="soft-skills__title fade-in mb-4 text-2xl font-bold">
							{{ $t('softSkills') }}
						</h3>
						<ul class="soft-skills__list">
							<li
								v-for="(item, index) in softSkills"
								:key="index"
								class="soft-skills__item slide-right"
								:style="getAnimDelay(index)"
							>
								{{ item }}
							</li>
						</ul>
					</div>
					<div class="hard-skills flex-1 text-center">
						<h3
							class="hard-skills__title fade-in font-bol mb-4 text-2xl font-bold"
						>
							{{ $t('hardSkills') }}
						</h3>
						<ul class="hard-skills__list">
							<li
								v-for="(item, index) in hardSkills"
								:key="index"
								class="hard-skills__item slide-left mb-2 flex items-center justify-center gap-3 last:mb-0"
								:style="getAnimDelay(index)"
							>
								<span
									class="hard-skills__item-rating flex justify-end"
									v-if="false"
								>
									<Icon
										class="text-amber-500"
										v-for="number in 5"
										:key="number"
										width="30"
										height="30"
										:icon="
											number > item.stars
												? 'material-symbols:star-outline'
												: 'material-symbols:star'
										"
									/>
								</span>

								<span class="flex-1 text-right">{{ item.title }}</span>
								<div class="hard-skills__icon-wrapper flex-1">
									<div class="w-12 rounded-full bg-white">
										<Icon
											:icon="item.iconName"
											width="48"
											height="48"
											class="p-2.5"
										/>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section
				class="section education mb-20 flex flex-col items-center justify-center dark:text-white md:min-h-screen"
				v-intersection
				id="education"
			>
				<h2 class="mb-10 text-center text-3xl font-bold">
					{{ $t('education') }}
				</h2>
				<p class="education__text slide-right" v-html="$t('educationText')"></p>
			</section>
			<section
				class="section portfolio mb-20 flex flex-col justify-center overflow-hidden dark:text-white md:min-h-screen"
				v-intersection
				id="projects"
			>
				<h2 class="mb-10 text-center text-3xl font-bold">
					{{ $t('myProjects') }}
				</h2>
				<div
					class="mx-auto grid gap-y-16 gap-x-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
				>
					<div
						class="portfolio__card card slide-right cursor-pointer border p-4"
						v-for="(item, index) in projects"
						:key="index"
						@click="showProjectInfo(index)"
					>
						<div class="card__image-wrapper overflow-hidden">
							<nuxt-img
								:src="`/img/portfolio/${item.preview}`"
								:alt="`Превью ${item.title}`"
								class="card__image mb-4 duration-500 hover:scale-125"
								format="webp"
							/>
						</div>
						<h3 class="card__title text-2xl font-bold">{{ item.title }}</h3>
						<p class="card__date text-lg">{{ item.date }}</p>
					</div>
				</div>
			</section>
			<modal ref="modal1" v-if="false">
				<template v-slot:title>
					<h3 class="modal-title">Связаться со мной</h3>
				</template>
				<template v-slot:body>
					<form
						class="contact-form grid grid-flow-col grid-cols-1 grid-rows-[40px_40px_1fr] gap-5 md:grid-cols-2 md:grid-rows-2"
					>
						<div class="contact-form__input-wrapper relative">
							<input
								type="text"
								placeholder="Имя"
								class="contact-form__input w-full rounded border px-4 py-2 invalid:border-red-500 focus:outline-none focus:valid:border-green-600"
								required
							/>
							<Icon
								icon="fa6-solid:xmark"
								height="30"
								width="30"
								class="xmark absolute top-1/2 right-0 -mt-2 hidden h-4 pr-4 text-red-500"
							/>
							<Icon
								icon="material-symbols:check"
								height="30"
								width="30"
								class="check absolute top-1/2 right-0 -mt-2 hidden h-4 pr-4 text-green-600"
							/>
						</div>
						<div class="contact-form__input-wrapper relative">
							<input
								type="email"
								placeholder="E-mail"
								class="contact-form__input w-full rounded border px-4 py-2 invalid:border-red-500 focus:outline-none focus:valid:border-green-600"
								required
							/>
							<Icon
								icon="fa6-solid:xmark"
								height="30"
								width="30"
								class="xmark absolute top-1/2 right-0 -mt-2 hidden h-4 pr-4 text-red-500"
							/>
							<Icon
								icon="material-symbols:check"
								height="30"
								width="30"
								class="check absolute top-1/2 right-0 -mt-2 hidden h-4 pr-4 text-green-600"
							/>
						</div>

						<textarea
							class="modal-textarea h-full resize-none rounded border px-4 py-2 invalid:border-red-500 focus:outline-none focus:valid:border-green-600 md:row-span-2"
							placeholder="Сообщение"
							required
						></textarea>
					</form>
				</template>
				<template v-slot:footer>
					<button
						class="modal-footer__button rounded border border-indigo-600 px-4 py-2 hover:bg-indigo-600 hover:text-white"
						@click="sendDataFunction"
					>
						Отправить
					</button>
				</template>
			</modal>
			<modal v-for="(item, index) in projects" :key="index" ref="projects">
				<template v-slot:title>
					<h3 class="modal-title">{{ item.title }}</h3>
				</template>
				<template v-slot:body>
					<p class="mb-10">{{ item.desc }}</p>
					<p class="mb-2">
						<span
							class="modal__span-title float-left block font-bold uppercase"
							>{{ $t('stack') }}</span
						>
						<span>{{ item.stack }}</span>
					</p>
					<p class="mb-10">
						<span
							class="modal__span-title float-left block font-bold uppercase"
							>{{ $t('date') }}</span
						>
						<span>{{ item.date }}</span>
					</p>
					<div
						class="modal__grid-gallery gallery mb-10 grid grid-flow-row grid-cols-2 grid-rows-[1fr_200px] items-center gap-6 md:grid-cols-4"
					>
						<div
							class="col-span-2 flex h-96 items-center justify-center md:col-span-4"
						>
							<nuxt-img
								:src="`/img/portfolio/${item.images[0]}`"
								:alt="`Изображение ${item.title}`"
								class="h-full object-contain"
								format="webp"
							/>
						</div>
						<div
							v-for="(el, id) in getProjectsImages[index]"
							:key="id"
							@click="selectImage(index, id)"
							class="flex h-full cursor-pointer items-center justify-center overflow-hidden border p-2"
						>
							<nuxt-img
								:src="`/img/portfolio/${el}`"
								class="gallery__img h-full w-full object-contain"
								:alt="`Изображение ${item.title} № ${id + 2}`"
								format="webp"
							/>
						</div>
					</div>
				</template>
				<template v-slot:footer>
					<a
						class="modal-footer__button cursor-pointer rounded border border-indigo-600 px-4 py-2 hover:bg-indigo-600 hover:text-white"
						:href="item.githubLink"
						target="_blank"
					>
						{{ $t('github') }}
					</a>
					<a
						class="modal-footer__button cursor-pointer rounded border border-indigo-600 px-4 py-2 hover:bg-indigo-600 hover:text-white"
						:href="item.href"
						target="_blank"
					>
						{{ $t('demo') }}
					</a>
				</template>
			</modal>
		</div>
	</main>
</template>

<script>
import Modal from '@/components/UI/Modal.vue';
import { Icon } from '@iconify/vue';

export default {
	components: {
		Modal,
		Icon
	},
	methods: {
		showModal(name) {
			this.$refs[name].show = true;
		},
		showProjectInfo(id) {
			this.$refs.projects[id].show = true;
		},
		getAnimDelay(index) {
			return `transition-delay: ${
				this.baseAnimDelay + index * this.baseAnimDelay
			}ms`;
		},
		selectImage(index, elemId) {
			let buf = this.projects[index].images[0];
			this.projects[index].images[0] = this.projects[index].images[elemId + 1];
			this.projects[index].images[elemId + 1] = buf;
		}
	},
	computed: {
		getProjectsImages() {
			let result = [];
			let buf = [];
			this.projects.forEach(el => {
				buf = el.images.filter(item => item != el.images[0]);
				result.push(buf);
			});
			return result;
		}
	},
	data() {
		return {
			hardSkills: [
				{
					title: 'HTML',
					stars: 5,
					iconName: 'skill-icons:html'
				},
				{
					title: 'CSS',
					stars: 5,
					iconName: 'skill-icons:css'
				},
				{
					title: 'SCSS',
					stars: 5,
					iconName: 'logos:sass'
				},
				{
					title: 'JavaScript',
					stars: 3,
					iconName: 'skill-icons:javascript'
				},
				{
					title: 'Vue',
					stars: 5,
					iconName: 'logos:vue'
				},
				{
					title: 'Nuxt',
					stars: 5,
					iconName: 'logos:nuxt-icon'
				},
				{
					title: 'Git',
					stars: 3,
					iconName: 'icon-park:github'
				},
				{
					title: 'Gulp',
					stars: 5,
					iconName: 'logos:gulp'
				},
				{
					title: 'Tailwind CSS',
					stars: 5,
					iconName: 'logos:tailwindcss-icon'
				},
				{
					title: 'Bootstrap',
					stars: 5,
					iconName: 'skill-icons:bootstrap'
				},
				{
					title: 'Photoshop',
					stars: 3,
					iconName: 'logos:adobe-photoshop'
				}
			],
			softSkills: [
				this.$t('responsibility'),
				this.$t('attentiveness'),
				this.$t('sociability')
			],
			baseAnimDelay: 200,
			projects: [
				{
					title: 'Dart',
					desc: this.$t('projectDesc0'),
					stack: 'HTML, CSS, JavaScript, Gulp',
					date: '2022',
					preview: '',
					href: 'https://skullage.github.io/Dart/',
					images: [
						'dart/dart.png',
						'dart/dart2.png',
						'dart/dart3.png',
						'dart/dart4.png',
						'dart/dart5.png',
						'dart/dart6.png',
						'dart/dart7.png'
					],
					githubLink: 'https://github.com/Skullage/Dart'
				},
				{
					title: 'Delivery',
					desc: this.$t('projectDesc1'),
					stack: 'HTML, CSS, JavaScript, Gulp',
					date: '2022',
					preview: '',
					href: 'https://skullage.github.io/Delivery/',
					images: [
						'delivery/delivery.png',
						'delivery/delivery2.png',
						'delivery/delivery3.png',
						'delivery/delivery4.png',
						'delivery/delivery5.png',
						'delivery/delivery6.png',
						'delivery/delivery7.png'
					],
					githubLink: 'https://github.com/Skullage/Delivery'
				},
				{
					title: 'Le Corte',
					desc: this.$t('projectDesc2'),
					stack: 'HTML, CSS, JavaScript, Gulp',
					date: '2022',
					preview: '',
					href: 'https://skullage.github.io/LeCorte/',
					images: [
						'lecorte/lecorte.png',
						'lecorte/lecorte2.png',
						'lecorte/lecorte3.png',
						'lecorte/lecorte4.png',
						'lecorte/lecorte5.png'
					],
					githubLink: 'https://github.com/Skullage/LeCorte'
				},
				{
					title: 'Porten',
					desc: this.$t('projectDesc3'),
					stack: 'HTML, CSS, JavaScript, Gulp',
					date: '2022',
					preview: '',
					href: 'https://skullage.github.io/Porten/',
					images: [
						'porten/porten.png',
						'porten/porten2.png',
						'porten/porten3.png',
						'porten/porten4.png',
						'porten/porten5.png',
						'porten/porten6.png'
					],
					githubLink: 'https://github.com/Skullage/Porten'
				},
				{
					title: 'Saka',
					desc: this.$t('projectDesc4'),
					stack: 'HTML, CSS, JavaScript, Gulp',
					date: '2022',
					preview: '',
					href: 'https://skullage.github.io/Saka/',
					images: [
						'saka/saka.png',
						'saka/saka2.png',
						'saka/saka3.png',
						'saka/saka4.png',
						'saka/saka5.png',
						'saka/saka6.png',
						'saka/saka7.png',
						'saka/saka8.png'
					],
					githubLink: 'https://github.com/Skullage/Saka'
				},
				{
					title: 'Hangman',
					desc: this.$t('projectDesc5'),
					stack:
						'HTML, CSS, JavaScript, Vue 3, Vuex, Vue router, Tailwind CSS, Socket.io, Node JS, Express, Vite',
					date: '2023',
					preview: '',
					href: 'https://hangman-tan-pi.vercel.app',
					images: [
						'hangman/1.png',
						'hangman/2.png',
						'hangman/3.png',
						'hangman/4.png'
					],
					githubLink: 'https://github.com/Skullage/hangman'
				}
			]
		};
	},
	watch: {
		'$i18n.locale'(newVal, oldVal) {
			this.softSkills = [
				this.$t('responsibility'),
				this.$t('attentiveness'),
				this.$t('sociability')
			];
			for (let i = 0; i < this.projects.length; i++) {
				this.projects[i].desc = this.$t('projectDesc' + i);
			}
		}
	},
	created() {
		this.projects.forEach(el => {
			el.preview = el.images[0];
		});
	}
};
</script>
<style lang="scss" scoped>
.show {
	.fade-in,
	.slide-right,
	.slide-left {
		@apply md:translate-x-0 md:opacity-100 md:blur-0 md:duration-1000;
	}
	.portfolio__card {
		&:nth-child(1),
		&:nth-child(4),
		&:nth-child(7),
		&:nth-child(10) {
			@apply lg:delay-[600ms];
		}
		&:nth-child(2),
		&:nth-child(5),
		&:nth-child(8),
		&:nth-child(11) {
			@apply lg:delay-[400ms];
		}
		&:nth-child(3),
		&:nth-child(6),
		&:nth-child(9),
		&:nth-child(12) {
			@apply lg:delay-200;
		}

		&:nth-child(1),
		&:nth-child(5),
		&:nth-child(9) {
			@apply xl:delay-[800ms];
		}
		&:nth-child(2),
		&:nth-child(6),
		&:nth-child(10) {
			@apply xl:delay-[600ms];
		}
		&:nth-child(3),
		&:nth-child(7),
		&:nth-child(11) {
			@apply xl:delay-[400ms];
		}
		&:nth-child(4),
		&:nth-child(8),
		&:nth-child(12) {
			@apply xl:delay-200;
		}
	}
}
.contact-form input:invalid ~ .xmark {
	display: block !important;
}
.contact-form input:valid ~ .check {
	display: block !important;
}
.modal__span-title + span {
	@apply block pl-24;
}

.slide-left {
	@apply md:translate-x-full md:opacity-0 md:blur;
}

.slide-right {
	@apply md:-translate-x-full md:opacity-0 md:blur;
}

.fade-in {
	@apply md:opacity-0 md:blur;
}
</style>
