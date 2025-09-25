<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from "vue";

const companies = ref([]);
const loading = ref(true);

const { sort = "asc" } = defineProps<{ sort: "asc" | "desc" }>();

onMounted(async () => {
    const url = `https://api.example.com/companies?sort=${sort}`;
    loading.value = true;
    const companiesResponse = await fetch(url);
    const companiesData = await companiesResponse.json();
    companies.value = companiesData;
    loading.value = false;
});

watchEffect(async () => {
    const url = `https://api.example.com/companies?sort=${sort}`;
    loading.value = true;
    const companiesResponse = await fetch(url);
    const companiesData = await companiesResponse.json();
    companies.value = companiesData;
    loading.value = false;
})
</script>

<template>
    <div>
        <slot :data="companies" :loading="loading" />
    </div>
</template>
