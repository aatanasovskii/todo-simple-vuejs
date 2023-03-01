import Vue from "vue";
import VueRouter from "vue-router";
import TodoEdit from "../components/TodoEdit.vue";
import HomeView from "../components/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/edit/:index",
    name: "edit",
    component: TodoEdit,
    props: true,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
