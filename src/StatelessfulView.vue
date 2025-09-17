<script setup lang="ts">
import CompaniesTable from "./components/CompaniesTable.vue";
</script>
<template>
    <section>
        <h2>Setting state in memory</h2>
        <CompaniesTable />
    </section>
    <section>
        <h2>Reading state from parameters</h2>
        <CompaniesTable />
    </section>
</template>

<style scoped>
h2,
section {
    margin-block: 2rem;
}
</style>
