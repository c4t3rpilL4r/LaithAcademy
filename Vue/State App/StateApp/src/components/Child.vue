<script setup>
import GrandChild from "./GrandChild.vue";
import { useNumbersStore } from "../stores/numbers";

const { numbers, addNumber } = useNumbersStore();
</script>

<template>
    <div>
        <h1>Child Component {{ numbers }}</h1>
        <div class="line"></div>
        <button @click="addNumber(4)">Add</button>
        <GrandChild />
    </div>
</template>
