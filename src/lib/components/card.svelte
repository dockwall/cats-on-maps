<script lang="ts">
	import Card, {
		Content,
		PrimaryAction,
		Media,
		MediaContent,
		Actions,
		ActionButtons,
		ActionIcons
	} from '@smui/card';
	import Button, { Label } from '@smui/button';
	import IconButton, { Icon } from '@smui/icon-button';

	let clicked = 0;
</script>

<div class="card-container">
	<Card>
		<PrimaryAction on:click={() => clicked++}>
			<Content class="mdc-typography--body2">
				<h2 class="card-container__title mdc-typography--headline6">Счётчик записей.</h2>
				<h3 class="mdc-typography--subtitle2">Скоро он будет здесь!</h3>
			</Content>
			<Actions>
				<ActionButtons>
					<Button>
						<Label>Войти</Label>
					</Button>
					<Button color="secondary">
						<Label>Карта</Label>
					</Button>
					<Button color="secondary">
						<Label>Список</Label>
					</Button>
				</ActionButtons>
			</Actions>
		</PrimaryAction>
	</Card>
</div>

<style lang="scss">
	.card-container {
		width: fit-content;

		&__title {
			margin: 0;
		}
	}
</style>
