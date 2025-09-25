<script setup lang="ts">
import CompaniesTable from "./CompaniesTable.vue";
import { useSortingStore } from "../stores/sorting.store";

const sorting = useSortingStore();
</script>
<template>
    <button @click="sorting.togglesort">Toggle sort</button>
    <CompaniesTable :sort="sorting.sort" />
</template>
