<script lang="ts">
</script>

<main class="mainpage">
	<div class="mainpage__banner">
		<h1 class="mdc-typography--headline1 mainpage__banner-title">
			Неглаженные, грустные и голодные коты
		</h1>
		<h2 class="mdc-typography--headline2 mainpage__banner-subtitle">
			ждут тебя во дворах вокруг &#128008;
		</h2>
	</div>
</main>

<style lang="scss">
	.mainpage {
		background: linear-gradient(180deg, rgba(0, 150, 136, 1) 0%, rgba(255, 193, 7, 1) 100%);
		&__banner {
			height: calc(100vh - 64px);
			box-sizing: border-box;
			padding-top: 20vh;
			display: flex;
			flex-direction: column;
			align-items: center;

			&-title {
				margin: 0;
				font-size: 60px;
				color: white;
			}

			&-subtitle {
				margin: 0;
				font-size: 45px;
			}
		}
	}
</style>
