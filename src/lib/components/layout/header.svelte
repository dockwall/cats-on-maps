<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import Button, { Label } from '@smui/button';

	export let base: string;

	let topAppBar: TopAppBar;

	const headerTitle = 'Cats on Maps';
</script>

<TopAppBar bind:this={topAppBar} variant="fixed">
	<Row>
		<Section>
			<IconButton class="material-icons">menu</IconButton>
			<Title>{headerTitle.toUpperCase()}</Title>
		</Section>
		<Section align="end" toolbar>
			<Button href="{base}/">
				<Label>На главную</Label>
			</Button>
			<Button href="{base}/map">
				<Label>Карта</Label>
			</Button>
			<Button href="{base}/list">
				<Label>Список</Label>
			</Button>
		</Section>
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar} />
