<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
    <ul>
        <li>
            <RouterLink to="/state-machines">Máquinas de estado</RouterLink>
        </li>
        <li>
            <RouterLink to="/vueisms">Vue-ismos</RouterLink>
        </li>
        <li>
            <RouterLink to="/composition-strats">Estrategias de composición</RouterLink>
        </li>
        <li>
            <RouterLink to="/stateless-stateful">Stateful/stateless</RouterLink>
        </li>
        <li>
            <RouterLink to="/resources">Recursos</RouterLink>
        </li>
    </ul>
</template>

