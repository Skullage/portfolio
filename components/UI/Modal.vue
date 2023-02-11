<template>
	<div
		class="fixed top-0 left-0 z-[1000] flex h-full w-full items-end justify-center duration-500 lg:items-center"
		:class="[{ '-translate-y-full opacity-0': !show }]"
	>
		<div
			class="flex h-auto max-h-full w-full flex-col border bg-white lg:max-h-[80%] lg:w-1/2"
		>
			<h3 class="modal-title mb-4 border-b py-8 text-center text-2xl">
				<slot name="title">Заголовок</slot>
			</h3>

			<div class="modal-content flex-1 overflow-y-auto px-4">
				<slot name="body">Дефолтный контент модального окна</slot>
			</div>

			<div
				class="modal-footer relative bottom-0 left-0 flex flex-wrap justify-center gap-2 py-6 lg:gap-10"
			>
				<slot name="footer"> </slot>

				<button
					class="modal-footer__button rounded border border-red-600 px-4 py-2 hover:bg-red-600 hover:text-white"
					@click="closeModal"
				>
					{{ $t('close') }}
				</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Modal',
	data() {
		return {
			show: false
		};
	},
	methods: {
		send() {},
		closeModal() {
			this.show = false;
		}
	}
};
</script>
