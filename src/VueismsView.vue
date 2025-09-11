<script setup lang="ts">
import { ref } from "vue";
import BoundInput from "./components/BoundInput.vue";

const inputText = ref("initial");
</script>
<template>
    <h2>V-model (2-way binding)</h2>
    <BoundInput v-model="inputText" />
</template>

