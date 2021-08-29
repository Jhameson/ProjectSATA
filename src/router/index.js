import { createWebHashHistory, createRouter } from "vue-router";

import FilterList from '../views/FilterList.vue';
import HomePage from '../views/HomePage.vue';
import Acesso from '../views/Acesso.vue';
import Login from '../views/Login.vue';
import Cadastro from '../views/Cadastro.vue';
import Perfil from '../views/Perfil.vue';
import MeuPerfil from '../views/MeuPerfil.vue';
import NotFound from '../views/NotFound.vue';

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
        path: "/meu-perfil",
        name: "Meu Perfil",
        component: MeuPerfil,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;