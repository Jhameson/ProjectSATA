import { createWebHashHistory, createRouter } from "vue-router";

import Search from '../views/Search.vue';
import HomePage from '../views/HomePage.vue';
import Acesso from '../views/Acesso.vue';
import Login from '../views/Login.vue';
import Cadastro from '../views/Cadastro.vue';
import Perfil from '../views/Perfil.vue';
import Portal from '../views/Portal.vue';
import Sobre from '../views/Sobre.vue';

import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: "/",
        name: "Home Page",
        component: HomePage,
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
    },
    {
        path: "/acesso",
        name: "Acesso",
        component: Acesso,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/cadastro",
        name: "Cadastro",
        component: Cadastro,
    },
    {
        path: "/perfil",
        name: "Perfil",
        component: Perfil,
    },
    {
        path: "/portal",
        name: "Portal",
        component: Portal,
    },
    {
        path: "/sobre",
        name: "Sobre",
        component: Sobre,
    },

    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;