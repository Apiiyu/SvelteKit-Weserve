<script lang="ts">
	// Components
	import Benefits from '$lib/components/benefits.svelte';
	import Faq from '$lib/components/faq.svelte';
	import Features from '$lib/components/features.svelte';
	import Growing from '$lib/components/growing.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Showcase from '$lib/components/showcase.svelte';
	import Sponsor from '$lib/components/sponsor.svelte';
	import Stories from '$lib/components/stories.svelte';

	export let data;
</script>

<section id="home" class="flex flex-col gap-[100px]">
	<Hero />
	<Sponsor />
	<Features features={data.features} />
	<Showcase showcases={data.showcases} />
	<Benefits benefits={data.benefits} />
	<Stories stories={data.stories} />
	<Faq faqs={data.faqs} />
	<Growing growings={data.growings} />
</section>
