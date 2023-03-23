<script lang="ts"></script>

<footer class="footer">
	<h3 class="footer__demo mdc-typography--headline3">Скоро здесь будут контакты и даты!</h3>

	<div class="footer__contacts mdc-typography--body1">
		<p>GitHub</p>

		<p>Telegram</p>
	</div>
</footer>

<style lang="scss">
	@use '@material/theme/color-palette';

	.footer {
		padding: 5px 25px;
		background-color: color-palette.$blue-grey-600;

		&__demo {
			color: white;
			padding: 0;
			margin: 15px 0;
			font-size: 45px;
			text-align: center;
		}

		&__contacts {
			color: white;
		}
	}
</style>
