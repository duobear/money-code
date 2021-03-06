import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import EditLabel from "@/components/Labels/EditLabel.vue";
import NotFound from '@/views/NotFound.vue'





Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
 
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/',
    redirect:'/money'

  },
  {
    path:'/money',
    component:Money,
  },
  {
    path:'/labels',
    component:Labels
  },
  {
    path:'/statistics',
    component:Statistics
  },
  {
    path:'/labels/edit/:id',
    
    component:EditLabel,
  },
  {
    path:'*',
    component:NotFound,
  }
]

const router = new VueRouter({
  routes
})

export default router
