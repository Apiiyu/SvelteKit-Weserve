<script lang="ts">
	// Constants
	import { SPONSOR_ASSETS } from '$lib/constants';
</script>

<section
	id="sponsor"
	class="container relative top-0 left-0 right-0 z-0 flex flex-col justify-center items-center gap-8"
>
	<figure class="flex flex-col justify-center items-center">
		<figcaption class="font-poppins font-bold text-xl text-white">
			Trusted by 83K Biggest Companies
		</figcaption>
	</figure>

	<section
		id="brands"
		class="grid grid-row-1 grid-flow-col auto-cols-max place-content-center gap-12"
	>
		{#each SPONSOR_ASSETS as asset}
			<a href={asset.linkTo} title="sponsor-url" rel="noopener noreferrer">
				{@html asset.icon}
			</a>
		{/each}
	</section>
</section>
