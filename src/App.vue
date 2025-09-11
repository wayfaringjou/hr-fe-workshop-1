<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <div class="app-wrapper">
        <nav>
            <RouterLink to="/">Home</RouterLink>
        </nav>
        <main>
            <RouterView />
        </main>
    </div>
</template>

<style>
.app-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-color: #222;
    height: 100%;
    width: 100%;
    padding-block-start: 3rem;
}
</style>

