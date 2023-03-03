<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import Button, { Label } from '@smui/button';

	let topAppBar: TopAppBar;
</script>

<TopAppBar class="header" bind:this={topAppBar} variant="fixed">
	<Row>
		<Section>
			<IconButton class="material-icons">menu</IconButton>
			<Title>Cats on Maps</Title>
		</Section>
		<Section align="end" toolbar>
			<Button href="/">
				<Label>На главную</Label>
			</Button>
			<Button href="/map">
				<Label>Карта</Label>
			</Button>
			<Button href="/list">
				<Label>Список</Label>
			</Button>
		</Section>
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar} />

<style lang="scss">
</style>
