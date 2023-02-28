import Vue from "vue";
import VueRouter from "vue-router";
import TodoButton from "../components/TodoButton.vue";
// import TodoList from "../components/TodoList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: TodoButton,
  },
  {
    path: "/list",
    name: "list",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "list" */ "../components/TodoList.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
