import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../components/HomeView.vue";
import BookView from "../components/BookView.vue";
import Calendly from "../components/Calendly.vue"


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/book', 
      name: 'book',
      component: BookView
    },
    {
      path: "/calendly",
      name: "calendly",
      component: Calendly
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: Calendly
    }
  ]
})

export default router
