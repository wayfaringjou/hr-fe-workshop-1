<script setup lang="ts">
import CompaniesTable from "./CompaniesTable.vue";
import { computed, ref, watchEffect } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()
// const sortOrder = ref<"asc"| "desc">("asc");
// console.log(route.params.sort)

// watchEffect(
//     () => {
//         sortOrder.value = route.query.sort === "desc" ? "desc": "asc";
//     }
// )

const sortOrder = computed<"asc"|"desc">(()=> route.query.sort as "asc"| "desc");

</script>
<template>
    <CompaniesTable :sort="sortOrder" />
</template>
