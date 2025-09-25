<script setup lang="ts">
import CompaniesDataManager from "./CompaniesDataManager.vue";
import DataCell from "./DataTable/DataCell.vue";
import DataHeader from "./DataTable/DataHeader.vue";
import DataRow from "./DataTable/DataRow.vue";
import DataTable from "./DataTable/DataTable.vue";

const { sort = "asc" } = defineProps<{ sort?: "asc" | "desc" }>();
</script>
<template>
    <CompaniesDataManager :sort="sort" v-slot="{ data }">
        <DataTable v-if="data.length > 0">
            <DataRow>
                <DataHeader
                    v-for="header in Object.keys(data[0])"
                    :key="header"
                    >{{ header }}</DataHeader
                >
            </DataRow>
            <DataRow v-for="company in data">
                <DataCell v-for="(value, _) in company">{{ value }}</DataCell>
            </DataRow>
        </DataTable>
    </CompaniesDataManager>
</template>
