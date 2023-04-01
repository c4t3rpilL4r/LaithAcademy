<script setup>
import { useRoute } from "vue-router";
import { ref, computed, watch } from "vue";
import quizzes from "../data/quizzes.json";
import QuizHeader from "../components/QuizHeader.vue";
import Question from "../components/Question.vue";
import Result from "../components/Result.vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizzes.find((q) => {
    return q.id === quizId;
});
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);

// const questionStatus = ref(
//     `${currentQuestionIndex.value}/${quiz.questions.length}`
// );

// watch(currentQuestionIndex, () => {
//     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
// });

const questionStatus = computed(
    () => `${currentQuestionIndex.value}/${quiz.questions.length}`
);
const barPercentage = computed(
    () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);

const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
        numberOfCorrectAnswers.value++;
    }

    showResults.value =
        currentQuestionIndex.value === quiz.questions.length - 1;

    currentQuestionIndex.value++;
};
</script>

<template>
    <div>
        <QuizHeader
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"
        />
        <div>
            <Question
                v-if="!showResults"
                :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected"
            />
            <Result
                v-else
                :quizQuestionLength="quiz.questions.length"
                :numberOfCorrectAnswers="numberOfCorrectAnswers"
            />
        </div>
    </div>
</template>
