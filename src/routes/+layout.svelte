<script lang="ts">
	export const prerender = true;

	import { base } from '$app/paths';
	import Header from '$lib/components/layout/header.svelte';
</script>

<Header {base} />

<slot />
