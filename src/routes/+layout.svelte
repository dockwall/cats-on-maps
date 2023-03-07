<script lang="ts">
	import { base } from '$app/paths';
	import 'normalize.css';
	import Header from '$lib/components/layout/header.svelte';
</script>

<Header {base} />

<slot />
