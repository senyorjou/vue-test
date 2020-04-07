import Vue from "vue"
import VueRouter from "vue-router"

import Home from "@/views/Home.vue"
import Prefs from "@/views/Prefs.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/prefs",
    name: "Prefs",
    component: Prefs,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
