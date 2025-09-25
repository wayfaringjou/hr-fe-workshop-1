<script setup lang="ts">
import StatefulCompaniesTable from "./components/StatefulCompaniesTable.vue";
import StatelessCompaniesTable from "./components/StatelessCompaniesTable.vue";
</script>
<template>
    <section>
        <h2>Setting state in memory</h2>
        <StatefulCompaniesTable />
    </section>
    <section>
        <h2>Reading state from parameters</h2>
        <StatelessCompaniesTable />
    </section>
</template>

<style scoped>
h2,
section {
    margin-block: 2rem;
}
</style>
