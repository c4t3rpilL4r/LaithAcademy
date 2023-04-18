<script setup lang="ts">
import Container from "./Container.vue";
import Card from "./Card.vue";

const data = [
	{
		id: 1,
		username: "selena",
		url: "https://media.allure.com/photos/5f501dd2f7395f494d265e3b/1:1/w_2210,h_2210,c_limit/AL102020_SELENA_GOMEZ_PROFILE_01.png",
		caption: "like",
	},
	{
		id: 2,
		username: "the weekend",
		url: "https://lakevillesouthnews.com/wp-content/uploads/2021/03/l-intro-1612032496.jpg",
		caption: "hello guys",
	},
];
</script>

<template>
	<Container>
		<div class="timeline-container">
			<Card v-for="post in data" :key="post.id" :post="post" />
		</div>
	</Container>
</template>

<style scoped>
.timeline-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 0;
}
</style>
