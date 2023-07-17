import Home from "../components/AppSectionBanner.vue";
import Product from "../components/AppSectionPromocoes.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: Product,
  },
];

export default routes;
