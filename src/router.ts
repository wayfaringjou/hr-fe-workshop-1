import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./HomeView.vue";
import GameView from "./GameView.vue";
import VueismsView from "./VueismsView.vue";
import StatelessfulView from "./StatelessfulView.vue";
import CompositionStratsView from "./CompositionStratsView.vue";
import ResourcesView from "./ResourcesView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/state-machines", component: GameView },
    { path: "/vueisms", component: VueismsView },
    { path: "/composition-strats", component: CompositionStratsView },
    { path: "/stateless-stateful", component: StatelessfulView },
    { path: "/resources", component: ResourcesView },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

