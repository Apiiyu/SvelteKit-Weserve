<script lang="ts">
	// Components
	import CardFeature from './card-feature.svelte';

	// Interfaces
	import type { IPropsFeatures } from '$lib/interfaces';

	/**
	 * @description Define props and specify the interfaces
	 */
	export let features: IPropsFeatures[];
</script>

<section
	id="features"
	class="container mx-auto max-w-none relative top-0 left-0 right-0 z-0 flex flex-col gap-12"
>
	<header class="flex justify-between items-center">
		<h1 class="font-clash-display font-semibold text-4xl text-white">You Will Get</h1>

		<p class="font-poppins font-medium text-base text-muted leading-8 max-w-lg">
			We always serious when building the key features because our clients needs a strong and
			reliable backbone in long terms.
		</p>
	</header>

	<section id="card-feature" class="grid grid-rows-1 grid-cols-12 gap-8">
		{#each features as feature}
			<CardFeature icon={feature.icon} title={feature.title} description={feature.description} />
		{/each}
	</section>
</section>
