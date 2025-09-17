<script setup lang="ts">
import { onMounted, ref } from "vue";

const companies = ref([]);
const loading = ref(true);

onMounted(async () => {
    const url = "https://api.example.com/companies?sort=asc";
    loading.value = true;
    const companiesResponse = await fetch(url);
    const companiesData = await companiesResponse.json();
    companies.value = companiesData;
    loading.value = false;
});
</script>

<template>
    <div>
        <slot :data="companies" :loading="loading" />
    </div>
</template>
