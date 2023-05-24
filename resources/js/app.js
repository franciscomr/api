import './bootstrap';
import { createApp } from "vue";
import router from './router/index.js';
import store from './store';
import App from './App.vue';

import.meta.glob([
  '../images/**',
]);

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");


