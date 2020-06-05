import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home"
import About from "../views/About"
import NotFound from "../views/NotFound"
import Topic from "../views/Topic"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: '/topic/:id',
    component: Topic
  },
  {
    path: "/about",
    component: About
  },
  {
    path: '*',
    component:NotFound
  }

]

const router = new VueRouter({
  routes
})

export default router
