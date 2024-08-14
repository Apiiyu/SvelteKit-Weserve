<script lang="ts">
	// Assets
	import iconDevice from '$lib/assets/icons/icon-device.svg';
	import iconGlobe from '$lib/assets/icons/icon-globe-black.svg';

	// Interfaces
	import type { IPropsGrowing } from '$lib/interfaces';

	/**
	 * @description Define props and specify the interfaces
	 */
	export let growings: IPropsGrowing[];
</script>

<section id="growing" class="container mx-auto max-w-none relative top-0 left-0 right-0 z-[1]">
	<section id="content" class="grid grid-rows-1 grid-cols-12 gap-8 bg-purple p-12 rounded-[40px]">
		<aside id="left-content" class="col-span-6 flex flex-col gap-10">
			<figure
				class="bg-white flex justify-center items-center gap-2 px-4 py-3 w-fit rounded-[100px]"
			>
				<img src={iconGlobe} alt="icon-globe" width="24" height="24" />

				<figcaption class="font-poppins font-semibold text-base text-primary">
					Acquire global ecosystem $500 million
				</figcaption>
			</figure>

			<header class="flex flex-col gap-3">
				<h1 class="font-clash-display font-semibold text-5xl text-white leading-tight">
					Start Growing Today
				</h1>

				<p class="font-poppins font-medium text-base text-white leading-8">
					We provide a variety of servers to grow your users acquisition much user-friendly and
					boosting up sales.
				</p>
			</header>

			<section id="btn-actions" class="flex items-center">
				<button
					class="bg-yellow font-poppins font-bold text-lg text-primary px-10 py-4 rounded-[100px]"
				>
					Explore More
				</button>

				<button
					class="flex justify-center items-center gap-2 font-poppins font-semibold text-base text-white px-10 py-4 rounded-[100px]"
				>
					<img src={iconDevice} alt="icon-device" width="24" height="24" />
					Schedule a Demo
				</button>
			</section>
		</aside>

		<section id="right-content" class="col-span-6">
			<section id="content" class="grid grid-rows-2 grid-cols-12 gap-5">
				{#each growings as growing}
					<figure
						id="card"
						class="col-span-4 group relative top-0 right-0 left-0 z-0 bg-white hover:bg-ternary flex flex-col justify-center items-center gap-5 py-10 rounded-[26px] transition-all ease-in-out duration-300 cursor-pointer"
					>
						{@html growing.icon}
						<div
							class="w-8 h-28 absolute top-5 right-16 rotate-[30deg] bg-[#BE97FF] blur-[20px] opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300"
						>
							&nbsp;
						</div>

						<figcaption
							class="font-poppins font-bold text-primary group-hover:text-white text-lg transition-all ease-in-out duration-300"
						>
							{growing.title}
						</figcaption>
					</figure>
				{/each}
			</section>
		</section>
	</section>
</section>
