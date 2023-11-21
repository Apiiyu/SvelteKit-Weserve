<script lang="ts">
	// Components
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';

	// Styles
	import 'swiper/css';
	import '../app.css';

	export let data;
</script>

<Navbar />
<slot />
<Footer data={data.footer} />
