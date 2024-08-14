<script lang="ts">
	// Assets
	import benefitIllustration from '$lib/assets/images/vip_illustration.webp';
	import iconChecklist from '$lib/assets/icons/icon-checklist.svg';

	/**
	 * @description Define props and specify the interfaces
	 */
	export let benefits: string[];
</script>

<section
	id="benefits"
	class="container mx-auto max-w-none relative top-0 left-0 right-0 z-0 grid grid-rows-1 grid-cols-12 gap-7"
>
	<section id="list-of-benefits" class="col-span-5 flex flex-col gap-10">
		<h1 class="font-clash-display font-semibold text-5xl text-white leading-normal max-w-md">
			We Give You All VIP Golden Access
		</h1>

		<section id="benefit" class="flex flex-col gap-6">
			{#each benefits as benefit}
				<figure class="flex items-center gap-2">
					<img src={iconChecklist} width="24" height="24" alt="icon-checklist" />

					<figcaption class="font-poppins font-semibold text-lg text-muted">
						{benefit}
					</figcaption>
				</figure>
			{/each}
		</section>

		<button
			class="w-fit bg-btn-primary font-poppins font-bold text-lg text-white px-10 py-4 rounded-[100px] opacity-90 hover:opacity-100 transition-all ease-in-out duration-300"
		>
			Get a Free Trial
		</button>
	</section>

	<section id="illustration-benefits" class="col-span-7 place-items-end">
		<picture class="flex justify-center">
			<img
				src={benefitIllustration}
				alt="illustration"
				width="512"
				height="550"
				class="w-full h-full object-cover max-w-lg max-h-[550px]"
			/>
		</picture>
	</section>
</section>
