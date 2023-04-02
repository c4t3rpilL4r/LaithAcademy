<script setup>
import StarWarsCards from "./components/StarWarsCards.vue";
</script>

<template>
	<main>
		<h1>STAR WARS</h1>
		<Suspense>
			<template #default>
				<StarWarsCards />
			</template>
			<template #fallback>Loading...</template>
		</Suspense>
	</main>
</template>

<style scoped></style>
