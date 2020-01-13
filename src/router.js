import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
// import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      children: [
        {
          path: '/organization',
          name: '奋斗没有终点，任何时候都是一个起点。',
          component: () => import(/* webpackChunkName: "demo" */ './views/organization.vue')
        },
        {
          path: '/department',
          name: '奋斗没有终点，任何时候都是一个起点。',
          component: () => import(/* webpackChunkName: "demo" */ './views/department.vue')
        },
        {
          path: '/resource',
          name: '奋斗没有终点，任何时候都是一个起点。',
          component: () => import(/* webpackChunkName: "demo" */ './views/resource.vue')
        },
        {
          path: '/classify',
          component: () => import(/* webpackChunkName: "demo" */ './views/classify.vue')
        },
        {
          path: '/classifyItem',
          name: '奋斗没有终点，任何时候都是一个起点。',
          component: () => import(/* webpackChunkName: "demo" */ './views/classifyItem.vue')
        },
        {
          path: '/tags',
          component: () => import(/* webpackChunkName: "demo" */ './views/tags.vue')
        },
        {
          path: '/latest',
          name: '奋斗没有终点，任何时候都是一个起点。',
          component: () => import(/* webpackChunkName: "demo" */ './views/latest.vue')
        },
        {
          path: '/admin',
          name: '奋斗没有终点，任何时候都是一个起点。',
          component: () => import(/* webpackChunkName: "demo" */ './views/admin.vue')
        },
      ]
    },
    {
      path: '/404',
      component: () => import('./views/404')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
    },
     // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
  ]
})
