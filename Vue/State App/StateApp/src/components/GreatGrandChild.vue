<script setup>
import useNumbers from "../composables/useNumbers";

const { numbers, filterNumbers } = useNumbers();
</script>

<template>
    <div>
        <h1>GreatGrandChild Component {{ filterNumbers(2) }}</h1>
    </div>
</template>
