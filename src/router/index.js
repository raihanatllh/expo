import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import programing from '../views/programing.vue'
import dimensi from '../views/3D.vue'
import ilustrasi from '../views/ilustrasi.vue'
import presentasi from '../views/presentasi.vue'
import detail_karya from '../views/detail_karya_views.vue'
import login from '../views/loginView.vue'
import gallery from '../views/gallery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/programing',
      name: 'programing',
      component: programing
    },
    {
      path: '/3D',
      name: 'dimensi',
      component: dimensi
    },
    {
      path: '/ilustrasi',
      name: 'ilustrasi',
      component: ilustrasi
    },
    {
      path: '/presentasi',
      name: 'presentasi',
      component: presentasi
    },
    {
      path: '/detail-karya',
      name: 'detail-karya',
      component: detail_karya
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery
    },
  ],
    scrollBehavior() {
       document.getElementById('app').scrollIntoView({behavior:'smooth'});
    }
})

export default router
