import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile";
import CEOCompliance from "../views/CEOCompliance";
import AEOCompliance from "../views/AEOCompliance";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/CEO/General_Compliance",
    name: "ceoCompliance",
    component: CEOCompliance
  },
  {
    path: "/AEO/General_Compliance",
    name: "aeoCompliance",
    component: AEOCompliance
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
