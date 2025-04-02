import Home from "@/components/Home.vue";
import Moon from "@/components/Moon.vue";
import TarotView from "@/components/TarotView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '/', component: Home},
    {path: '/moon-mood/', component: Moon},
    {path: '/tarot/', component: TarotView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router