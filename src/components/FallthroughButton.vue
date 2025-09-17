<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
</script>
<template>
    <div>
        <button class="default" style="padding: 1rem" v-bind="attrs">
            <slot />
        </button>
    </div>
</template>

<style scoped>
.default {
    background-color: blue;
    color: white;
}
</style>
