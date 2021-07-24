import { createRouter, createWebHistory } from "vue-router";
import Direction from '@/nav'
const routes = [
  {
    path: "/",
    name: "nav",
    component: Direction,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
