<script lang="ts">
	// Components
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	// Styles
	import 'swiper/css';
	import '../app.css';

	export let data;
</script>

<!-- SEO Configurations -->
<svelte:head>
	<meta name="description" content="Apiiyu SvelteKit - WeServe" />
	<meta name="keywords" content="Apiiyu SvelteKit - WeServe" />
	<meta name="author" content="Apiiyu" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#05051E" />
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="google" content="notranslate" />
	<meta name="google" content="nositelinkssearchbox" />
	<title>Apiiyu SvelteKit - WeServe</title>
</svelte:head>

<Navbar />
<slot />
<Footer data={data.footer} />
