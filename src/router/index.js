import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  }, {
   path: '/dashboard',
  name: 'dashboard',
  component: () => import('@/pages/dashboard/Index.vue')
  }, {
   path: '/ondragsorting',
   name: 'ondragsorting',
   component: () => import('@/pages/ondragsorting/Index.vue')
  }, {
   path: '/imagepreview',
   name: 'imagepreview',
   component: () => import('@/pages/imagepreview/Index.vue')
  }, {
   path: '/datetimepicker',
   name: 'datetimepicker',
   component: () => import('@/pages/datetimepicker/Index.vue')
  }, {
   path: '/lineclamp',
   name: 'lineclamp',
   component: () => import('@/pages/lineclamp/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
