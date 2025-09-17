<script setup lang="ts">
import { ref } from "vue";
import BoundInput from "./components/BoundInput.vue";
import FallthroughButton from "./components/FallthroughButton.vue";

const inputText = ref("initial");
</script>
<template>
    <h2>V-model (2-way binding)</h2>
    <a href="https://vuejs.org/guide/components/v-model.html#component-v-model"
        >[Docs]</a
    >
    <p>
        Util cuando necesitamos pasar información inicial a un componente
        anidado y reaccionar si el dato cambia en el componente anidado.
    </p>
    <br />
    <BoundInput v-model="inputText" />

    <h2>Fallthrough Attributes</h2>
    <a href="https://vuejs.org/guide/components/attrs.html"
        >[Docs]</a
    >
    <p>
        Puede ser confuso, pero ofrece flexibilidad para que el equipo de
        desarrollo pueda reutilizar un componente en distintos escenarios.
    </p>
    <br />
    <div class="btn-wrapper">
        <FallthroughButton>Default</FallthroughButton>
        <FallthroughButton class="red">Red</FallthroughButton>
        <FallthroughButton style="padding-inline: 2rem"
            >Padded</FallthroughButton
        >
    </div>
</template>

<style scoped>
h2,
p {
    margin-block-start: 2rem;
}
.red {
    background-color: red;
}
.btn-wrapper {
    display: flex;
    gap: 1rem;
}
</style>
