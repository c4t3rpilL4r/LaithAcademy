<script setup>
import { provide, ref } from "vue";
import Parent from "./components/Parent.vue";

const numbers = ref([1, 2, 3, 4]);

provide("numbers", numbers);
</script>

<template>
    <main>
        <Parent />
    </main>
</template>

<style scoped>
main {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

div {
    display: flex;
    flex-direction: column;
}
</style>
