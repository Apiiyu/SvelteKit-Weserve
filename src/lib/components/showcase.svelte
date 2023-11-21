<script lang="ts">
	// Interfaces
	import type { IPropsShowcase } from '$lib/interfaces';

	/**
	 * @description Define props and specify the interfaces
	 */
	export let showcases: IPropsShowcase[];
</script>

<section id="showcase">
	<header class="container relative top-0 left-0 right-0 z-0">
		<figure class="flex flex-col justify-center items-center gap-3">
			<h1 class="font-clash-display font-semibold text-5xl text-white">Our Showcase</h1>

			<figcaption
				class="font-poppins font-medium text-base text-muted text-center leading-8 max-w-[532px]"
			>
				They built amazing website to help more people around the world by using our recommendation
				services and products
			</figcaption>
		</figure>
	</header>

	<swiper-container
		class="mySwiper mt-8"
		slides-per-view="4"
		space-between="30"
		free-mode="true"
		loop="true"
	>
		{#each showcases as showcase}
			<swiper-slide
				class="group relative top-0 left-0 z-0 flex justify-center items-center text-center text-white rounded-2xl !w-80 !h-56 hover:border-4 hover:border-solid hover:border-primary transition-all ease-in-out duration-300 cursor-pointer"
			>
				<img src={showcase.image} alt="showcase" class="w-full h-full object-cover rounded-2xl" />

				<a
					href={showcase.linkTo}
					class="bg-btn-primary font-poppins font-semibold text-base text-white px-6 py-3 rounded-[100px] absolute -bottom-20 group-hover:bottom-5 left-1/2 -translate-x-1/2 transition-all ease-out duration-300"
				>
					View Details
				</a>
			</swiper-slide>
		{/each}
	</swiper-container>
</section>
