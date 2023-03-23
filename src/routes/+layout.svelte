<script lang="ts">
	import { base } from '$app/paths';
	import 'normalize.css';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
</script>

<Header {base} />

<slot />

<Footer />
