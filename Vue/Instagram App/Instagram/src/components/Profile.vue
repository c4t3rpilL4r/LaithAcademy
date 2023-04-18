<script setup lang="ts">
import Container from "./Container.vue";
import ImageGallery from "./ImageGallery.vue";
import UserBar from "./UserBar.vue";

const posts = [
	{
		id: 1,
		image: "https://t3.ftcdn.net/jpg/05/16/36/14/360_F_516361406_EanyWUKdEA1TaahDGuEstt23e6W1camE.jpg",
	},
	{
		id: 2,
		image: "https://t4.ftcdn.net/jpg/01/51/99/39/360_F_151993994_mmAYzngmSbNRr6Fxma67Od3WHrSkfG5I.jpg",
	},
	{
		id: 3,
		image: "https://t4.ftcdn.net/jpg/02/42/52/27/360_F_242522709_ZhoDmO1L1PHkL6yvVVNutSBGsk1Ob7m0.jpg",
	},
];
</script>

<template>
	<Container>
		<div class="profile-container">
			<UserBar
				username="laithharb"
				:userInfo="{ posts: 4, followers: 100, following: 342 }"
			/>

			<ImageGallery :posts="posts" />
		</div>
	</Container>
</template>

<style scoped>
.profile-container {
	display: flex;
	flex-direction: column;
	padding: 20px 0;
}
</style>
