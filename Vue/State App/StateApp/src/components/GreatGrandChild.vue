<script setup>
import { useNumbersStore } from "../stores/numbers";

const { numbers, filterNumber } = useNumbersStore();
</script>

<template>
    <div>
        <h1>GreatGrandChild Component {{ filterNumber(3) }}</h1>
    </div>
</template>
