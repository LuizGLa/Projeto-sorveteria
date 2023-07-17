import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "animate.css";
import App from "./App.vue";

import routes from "./router/routes";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

createApp(App).use(router).mount("#app");
