<script setup>
import Parent from "./components/Parent.vue";
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
