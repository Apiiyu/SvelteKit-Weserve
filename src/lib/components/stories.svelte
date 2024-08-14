<script lang="ts">
	// Assets
	import iconStar from '$lib/assets/icons/icon-star.svg';

	// Interfaces
	import type { IPropsStories } from '$lib/interfaces';

	/**
	 * @description Define props and specify the interfaces
	 */
	export let stories: IPropsStories[];
</script>

<section
	id="stories"
	class="container mx-auto max-w-none relative top-0 left-0 right-0 z-0 flex flex-col gap-8"
>
	<header class="flex flex-col justify-center items-center gap-3">
		<h1 class="font-clash-display font-semibold text-5xl text-white">Great Stories</h1>

		<p class="font-poppins font-medium text-base text-muted">
			Boost your confidence to build a successful business
		</p>
	</header>

	<section id="story" class="grid grid-rows-1 grid-cols-12 gap-8">
		{#each stories as story}
			<section
				id="card"
				class="col-span-4 bg-secondary flex flex-col gap-4 items-start p-6 rounded-2xl"
			>
				<picture class="flex items-center gap-1">
					{#each Array(story.rate) as rate}
						<img src={iconStar} alt={`star-${rate}`} width="24" height="24" class="w-6 h-6" />
					{/each}
				</picture>

				{@html story.description}

				<figure id="user-profile" class="flex items-center gap-3">
					<img
						src={story.avatar}
						alt="img-user"
						width="60"
						height="60"
						class="w-15 h-15 rounded-full"
					/>

					<figcaption class="flex flex-col gap-1">
						<p class="font-poppins font-semibold text-base text-white">{story.username}</p>
						<p class="font-poppins font-medium text-muted text-sm">{story.position}</p>
					</figcaption>
				</figure>
			</section>
		{/each}
	</section>
</section>
