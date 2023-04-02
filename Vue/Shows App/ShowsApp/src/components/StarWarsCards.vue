<script setup>
// import axios from "axios";

// const response = await axios.get("https://swapi.dev/api/people");

import { reactive, watchEffect } from "vue";

const state = reactive({
	data: null,
	loading: true,
	error: null,
});

const fetchApiData = async () => {
	try {
		const response = await fetch("https://swapi.dev/api/people");
		const data = await response.json();

		state.data = data;
		state.loading = false;
	} catch (error) {
		state.error = error;
		state.loading = false;
	}
};

fetchApiData();

watchEffect(() => {
	console.log(state.data);
});
</script>

<template>
	<div>
		<h1>Star Wars Cards</h1>
	</div>
</template>
