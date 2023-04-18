<script setup lang="ts">
defineProps<{
	posts: {
		id: number;
		image: string;
	}[];
}>();
</script>

<template>
	<div class="image-gallery-container">
		<img v-for="post in posts" :key="post.id" :src="post.image" alt="" />
	</div>
</template>

<style scoped>
.image-gallery-container {
	display: flex;
	justify-content: left;
	flex-wrap: wrap;
}

img {
	margin: 5px;
	width: 200px;
}
</style>
