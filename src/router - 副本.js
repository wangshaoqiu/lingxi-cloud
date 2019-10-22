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
      redirect: 'organization',
      component: DashboardLayout,
      children: [
        {
          path: '/organization',
          name: '组织架构',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/organization.vue')
        },
        {
          path: '/department',
          name: '资源管理-部门',
          component: () => import(/* webpackChunkName: "demo" */ './views/department.vue')
        },
        {
          path: '/resource',
          name: '资源管理',
          component: () => import(/* webpackChunkName: "demo" */ './views/resource.vue')
        }
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
