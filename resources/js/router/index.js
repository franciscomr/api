import { createRouter, createWebHistory } from "vue-router";
import DataTable from '../templates/DataTable.vue';
import Home from '../templates/Home.vue';
import About from '../components/About.vue';
import Main from '../layouts/Main.vue';


const menu = {
  'Catalogos': {
    'title': 'Catálogos',
    'icon': 'bookshelf-icon',
    'links': {
      'Organizaciones': 'catalog.organizations.index',
      'Sucursales': 'catalog.branches.index'
    }
  }
}

const routes = [
  {
    path: "/",
    name: "index",
    component: Main,
  },
  {
    path: "/home",
    name: "home",
    component: About,
  },
  {
    path: "/login",
    name: "login",
    component: About,
  },
  /*
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/organizaciones",
    name: "catalog.organizations.index",
    component: DataTable,
  },
  {
    path: "/sucursales",
    name: "catalog.branches.index",
    component: DataTable,
  },
  */
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;