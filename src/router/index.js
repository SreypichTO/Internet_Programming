import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import PageCategory from '../views/HomeView.vue'
// import 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {  
      path: "/category",
      name: "category",
      component: () => import('../views/CategoryView.vue'),
    },
    { 
       path: "/products",
       name: "product",
      component: () => import('../views/ProductDetail.vue'),
    },
  ]
  
})

export default router



