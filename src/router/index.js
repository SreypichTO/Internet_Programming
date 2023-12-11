import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import PageCategory from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    { // Lazy load
      path: "/category",
      name: "category",
      component: () => import('../views/CategoryView.vue'),
    },
    // { 
    //   path: "/products/:productId",
    //   name: "product",
    //   component: () => import('../views/ProductView.vue'),
    // },
  ]
  
})

export default router



