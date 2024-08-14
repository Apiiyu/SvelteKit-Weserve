<script lang="ts">
	// Assets
	import iconArrowDown from '$lib/assets/icons/icon-arrow-down.svg';
	import iconVideoCircle from '$lib/assets/icons/icon-video-circle.svg';

	// Interfaces
	import type { IPropsFaq } from '$lib/interfaces';

	/**
	 * @description Define props and specify the interfaces
	 */
	export let faqs: IPropsFaq[];

	/**
	 * @description Handle event when user click the button then show the answer by id
	 * @param {number} id
	 */
	const isOpenAnswer = (id = 1) => {
		faqs = faqs.map((faq) => {
			if (faq.id === id) {
				faq.isActive = !faq.isActive;
			}

			return faq;
		});

		return null;
	};
</script>

<article id="faq" class="container mx-auto max-w-none relative top-0 left-0 right-0 z-0">
	<section id="main-content" class="grid grid-rows grid-cols-12 gap-8 items-center">
		<aside id="left-content" class="col-span-6 flex flex-col gap-10">
			<header class="flex flex-col gap-3">
				<h1 class="font-clash-display font-semibold text-5xl text-white leading-tight">
					Frequently Asked Questions
				</h1>

				<p class="font-poppins font-medium text-base text-muted leading-8 max-w-md">
					Our purpose is to help all online businesses from scratch to grow bigger without backing
					up
				</p>
			</header>

			<button
				class="bg-secondary hover:bg-btn-primary w-fit flex justify-center items-center gap-2 font-poppins font-semibold text-base text-white px-5 py-4 rounded-[100px] transition-all ease-in-out duration-300"
			>
				<img src={iconVideoCircle} alt="icon-device" width="32" height="32" />
				Watch Demo
			</button>
		</aside>

		<section id="right-content" class="col-span-6 flex flex-col gap-5">
			{#each faqs as faq}
				<figure class="bg-secondary flex flex-col gap-3 p-5 rounded-2xl">
					<header class="flex justify-between items-center">
						<h1 class="font-poppins font-bold text-xl text-white">
							{faq.question}
						</h1>

						<button
							class="hover:bg-gray w-8 h-8 p-2 hover:rounded-full cursor-pointer transition-all ease-in-out duration-300"
							on:click={isOpenAnswer(faq.id)}
						>
							<img
								src={iconArrowDown}
								alt="icon-arrow"
								width="16"
								height="16"
								class="w-full h-full"
							/>
						</button>
					</header>

					<figcaption
						class={faq.isActive
							? 'font-poppins font-medium text-base text-muted leading-8 max-w-lg transition-all ease-in-out duration-300'
							: 'font-poppins font-medium text-base text-muted leading-8 max-w-lg transition-all ease-in-out duration-300 hidden'}
					>
						{faq.answer}
					</figcaption>
				</figure>
			{/each}
		</section>
	</section>
</article>
