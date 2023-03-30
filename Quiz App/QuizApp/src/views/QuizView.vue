<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import q from "../data/quizzes.json";

const route = useRoute();
const quiz = q.find((quiz) => {
	return quiz.id === parseInt(route.params.id);
});
</script>

<template>
	<div>
		<header>
			<h4>Question 1/3</h4>
			<div class="bar">
				<div class="completion"></div>
			</div>
		</header>

		<div class="question-container">
			<h1 class="question">{{ question.text }}</h1>
		</div>

		<div class="options-container">
			<div
				v-for="option in question.options"
				:key="option.id"
				class="option"
			>
				<p class="option-label"></p>
				<div class="option-value">
					<p></p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
header {
	margin-top: 20px;
}

header h4 {
	font-size: 30px;
}

.bar {
	width: 300px;
	height: 50px;
	border: 3px solid bisque;
}

.completion {
	height: 100%;
	width: 0%;
	background-color: bisque;
}

.question-container {
	margin-top: 20px;
}

.question {
	font-size: 40px;
	margin-bottom: 20px;
}

.option {
	display: flex;
	margin-bottom: 20px;
	cursor: pointer;
	flex-direction: column;
}
</style>
