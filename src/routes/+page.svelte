<script lang="ts">
	import { base } from '$app/paths';
</script>

<main class="mainpage">
	<div class="mainpage__banner">
		<h1 class="mdc-typography--headline1 mainpage__banner-title">Грустные и голодные коты</h1>
		<p class="mdc-typography--headline2 mainpage__banner-subtitle">
			ждут тебя во дворах вокруг &#128008;
		</p>
	</div>
	<div class="mainpage__info">
		<h2 class="mdc-typography--headline2 mainpage__info-title">
			Cats on Maps — проект по социальному мониторингу бродячих кошек
		</h2>

		<ul class="mainpage__info-list mdc-typography--subtitle1">
			<li class="mainpage__info-list-item">Каждое животное описывается уникальной карточкой</li>
			<li class="mainpage__info-list-item">
				Карточки возможно просматривать в режиме <a href="{base}/list">списка</a>, либо
				<a href="{base}/map">карты</a>
			</li>
			<li class="mainpage__info-list-item">
				После авторизации можно создавать, редактировать и удалять свои карточки
			</li>
		</ul>
	</div>
</main>

<style lang="scss">
	.mainpage {
		background: linear-gradient(180deg, rgba(0, 150, 136, 1) 0%, rgba(255, 193, 7, 1) 100%);
		&__banner {
			height: calc(100vh - 64px);
			width: 80%;
			margin: 0 auto;
			box-sizing: border-box;
			padding-top: 20vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;

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

		&__info {
			text-align: center;
			height: 75vh;
			background-color: transparent;

			&-title {
				width: 80%;
				margin: 0 auto;
				font-size: 60px;
				color: white;
			}

			&-list {
				width: 80%;
				margin: 0 auto;
				padding: 40px 10px;
				margin-top: 50px;
				background: rgba(255, 255, 255, 0.4);
				box-sizing: border-box;
				border-radius: 8px;
				box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);

				&-item {
					font-size: 30px;
					font-weight: 300;
					line-height: 130%;

					&::marker {
						content: none;
					}

					&:not(:last-child) {
						margin-bottom: 40px;
					}
				}
			}
		}
	}
</style>
