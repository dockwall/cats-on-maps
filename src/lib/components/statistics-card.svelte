<script lang="ts">
	import Card, { Content, Actions } from '@smui/card';

	import Button, { Label } from '@smui/button';

	export let statisticsValue: number = 0;
	export let statisticsDescription: string;
	export let buttonsData: Record<string, any>[];
</script>

<div class="card">
	<Card variant="outlined">
		<h3 class="mdc-typography--headline3 card__title">{statisticsValue}</h3>

		<Content class="mdc-typography--body1">
			{statisticsDescription}
		</Content>

		{#if buttonsData}
			<Actions>
				{#each buttonsData as button}
					<Button href={button.link}>
						<Label>{button.label}</Label>
					</Button>
				{/each}
			</Actions>
		{/if}
	</Card>
</div>

<style lang="scss">
	.card {
		text-align: left;

		&__title {
			margin: 0;
			padding: 16px 16px 0;
		}
	}
</style>
