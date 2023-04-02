<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header class="container">
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
	</header>
	<Transition name="route">
		<RouterView />
	</Transition>
</template>

<style scoped>
header {
	line-height: 1.5;
	max-height: 100vh;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}

.container {
	max-width: 300px;
	margin: 10px auto;
}

.container a {
	margin-right: 10px;
}

/* ROUTE ANIMATION */
.route-enter-from {
	opacity: 0;
	transform: translateX(100px);
}

.route-enter-to {
	opacity: 1;
	transform: translateX(0);
}

.route-enter-active {
	transition: all 0.5s ease;
}
</style>
