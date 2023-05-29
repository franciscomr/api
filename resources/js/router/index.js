import { createRouter, createWebHistory } from "vue-router";
import NotFound from '../pages/NotFound.vue';
import Login from '../pages/Login.vue';
import DataTable from '../templates/DataTable.vue';
import DataForm from '../templates/DataForm.vue';
import Home from '../templates/Home.vue';
import About from '../components/About.vue';
import Main from '../layouts/Main.vue';


const menu = {

  'Catalog': {
    'title': 'Catálogos',
    'icon': 'bookshelf-icon',
    'color': 'blue',
    'links': {
      'Organizaciones': 'organizations',
      'Sucursales': 'branches',
      'Organizacione': 'organizations',
      'Sucursale': 'branches',
      'Organizacion': 'organizations',
      'Sucursal': 'branches',
      'Organizacion': 'organizations',
      'Sucursal': 'branches'
    }
  },
  'DeviceInventory': {
    'title': 'Inventario de Equipos',
    'icon': 'monitor-cellphone-icon',
    'color': 'red',
    'links': {
      'Organizaciones': 'organizations',
      'Sucursales': 'branches',
      'Organizacione': 'organizations',
      'Sucursale': 'branches',
      'Organizacion': 'organizations',
      'Sucursal': 'branches',
      'Sucursale': 'branches',
      'Organizacion': 'organizations',
      'Sucursal': 'branches',
      'Organcion': 'organizations',
      'Sucursal': 'branches'
    }
  },
  'ServiceDesk': {
    'title': 'Mesa de Servicios',
    'icon': 'face-agent-icon',
    'color': 'green',
    'links': {
      'Organizaciones': 'organizations',
      'Sucursales': 'branches',
      'Organizacione': 'organizations',
      'Sucursale': 'branches',
      'Organizacion': 'organizations',
      'Sucursal': 'branches',
      'Sucursale': 'branches',
      'Organizacion': 'organizations',
      'Sucursal': 'branches'
    }
  }
}

const routes = [

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/",
    name: "index",
    component: Main,
  },
  {
    path: "/app",
    name: "home",
    component: Home,
    props: { menu: menu },
    children: [
      {
        path: "organizations",
        name: "organizations",
        component: DataTable,
        props: {
          title: 'Organizaciones',
          fields: [
            { label: 'ID', name: 'id', width: 'w-[5%]' },
            { label: 'Organizacion', name: 'name', width: 'w-[12%]' },
            { label: 'Razon Social', name: 'businessName', width: 'w-[12%]' },
            { label: 'Direccion', name: 'address', width: 'w-[12%]' },
            { label: 'Poblacion', name: 'city', width: 'w-[10%]' },
            { label: 'Estado', name: 'state', width: 'w-[10%]' },
            { label: 'C P', name: 'postalCode', width: 'w-[5%]' },
            { label: 'Creado Por', name: 'createdBy', width: 'w-[12%]' },
            { label: 'Creado a las', name: 'createdAt', filter: 'date', width: 'w-[12%]' }
            //     { label: 'Actualizado Por', name: 'updatedBy', width: 'w-[10%]' },
            //   { label: 'Actualizado a las', name: 'updatedAt', filter: 'date', width: 'w-[11%]' },
          ],
          actions: [
            { name: 'show', icon: 'eye', title: 'Mostrar Registro' },
            { name: 'edit', icon: 'pencil', route: 'organizations.edit', title: 'Editar Registro' },
          ]
        }
      },
      {
        path: "/organizations/create",
        name: "organizations.create",
        component: DataForm,
        props: {
          title: 'Organizaciones',
          resource: 'organizations',
          fields: [
            {
              label: 'Nombre de la Organización',
              name: 'name',
              type: 'input',
              propieties: {
                type: 'text',
                required: true
              }
            },
            {
              label: 'Razón Social',
              name: 'businessName',
              type: 'input',
              propieties: {
                type: 'text',
                required: true
              }
            },
            {
              label: 'Dirección',
              name: 'address',
              type: 'input',
              propieties: {
                type: 'text',
                required: true
              }
            },
            {
              label: 'Ciudad / Población',
              name: 'city',
              type: 'input',
              propieties: {
                type: 'text',
                required: true
              }
            },
            {
              label: 'Estado',
              name: 'state',
              type: 'input',
              propieties: {
                type: 'text',
                required: true
              }
            },
            {
              label: 'Codigo Postal',
              name: 'postalCode',
              type: 'input',
              propieties: {
                type: 'text',
                required: true
              }
            }
          ]
        }
      },
      {
        path: "/organizations/edit/:id",
        name: "organizations.edit",
        component: DataForm,
        props: {
          title: 'Organizaciones',
          resource: 'organizations',
          is_new_record: false,
          fields: [
            {
              label: 'Nombre de la Organización',
              name: 'name',
              type: 'input',
              propieties: {
                type: 'text',
                required: true
              }
            },
            {
              label: 'Razón Social',
              name: 'businessName',
              type: 'input',
              propieties: {
                type: 'text',
                required: true
              }
            },
            {
              label: 'Dirección',
              name: 'address',
              type: 'input',
              propieties: {
                type: 'text',
                required: true
              }
            },
            {
              label: 'Ciudad / Población',
              name: 'city',
              type: 'input',
              propieties: {
                type: 'text',
                required: true
              }
            },
            {
              label: 'Estado',
              name: 'state',
              type: 'input',
              propieties: {
                type: 'text',
                required: true
              }
            },
            {
              label: 'Codigo Postal',
              name: 'postalCode',
              type: 'input',
              propieties: {
                type: 'text',
                required: true
              }
            }
          ]
        }
      },
      {
        path: "/branches",
        name: "branches",
        component: About,
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login,
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