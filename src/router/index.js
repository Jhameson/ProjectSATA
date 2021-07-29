import { createWebHashHistory, createRouter } from "vue-router";

import FilterList from '../views/FilterList.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
    {
        path: "/",
        name: "Home Page",
        component: HomePage,
    },
    {
        path: "/filterlist",
        name: "Filter List",
        component: FilterList,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;