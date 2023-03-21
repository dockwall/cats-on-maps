<script lang="ts">
	import MainPageBanner from '$lib/assets/images/main-page.jpg';
</script>

<main class="mainpage">
	<div class="mainpage__banner">
		<div>
			<img class="mainpage__banner-img" src={MainPageBanner} alt="Stray cats" />
		</div>
	</div>
</main>

<p>This is main + about page</p>

<style lang="scss">
	.mainpage {
		&__banner {
			position: relative;
			&-img {
				width: 100%;
			}
		}
	}
</style>
