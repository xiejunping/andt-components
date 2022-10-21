// import Vue from 'vue'
// import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import { cancelRequest } from '@/api/request.class'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      // redirect: '/create',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/promote',
      name: 'promote',
      component: () => import(/* webpackChunkName: "promote" */ '@/views/promote/Layout.vue'),
      children: [
        {
          path: '/adplan',
          name: 'adplan',
          component: () => import(/* webpackChunkName: "adplan" */ '@/views/promote/adplan/Main.vue'),
          children: [
            {
              path: 'account',
              name: 'account',
              component: () => import(/* webpackChunkName: "account" */ '@/views/promote/adplan/AccountList.vue')
            },
            {
              path: 'group',
              name: 'group',
              component: () => import(/* webpackChunkName: "group" */ '@/views/promote/adplan/GroupList.vue')
            },
            {
              path: 'advertise',
              name: 'advertise',
              component: () => import(/* webpackChunkName: "advertise" */ '@/views/promote/adplan/AdvertList.vue')
            },
            {
              path: 'idea',
              name: 'idea',
              component: () => import(/* webpackChunkName: "idea" */ '@/views/promote/adplan/IdeaList.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/create',
      name: 'create',
      component: () => import(/* webpackChunkName: "create" */ './views/create/Layout.vue'),
      children: [
        {
          path: 'toutiao',
          name: 'toutiao',
          component: () => import(/* webpackChunkName: "bytedancemain" */ './views/create/toutiao/Main.vue'),
          children: [
            {
              path: 'campaign',
              name: 'campaign',
              component: () => import(/* webpackChunkName: "bytecampaign" */ './views/create/toutiao/Campaign.vue')
            },
            {
              path: 'plan',
              name: 'plan',
              component: () => import(/* webpackChunkName: "byteplan" */ './views/create/toutiao/Plan.vue')
            },
            {
              path: 'creative',
              name: 'creative',
              component: () => import(/* webpackChunkName: "bytecreative" */ './views/create/toutiao/Creative.vue')
            }
          ]
        },
        {
          path: 'tencent',
          name: 'tencent',
          component: () => import(/* webpackChunkName: "tencentmain" */ './views/create/tencent/Main.vue'),
          children: [
            {
              path: 'campaign',
              name: 'campaign',
              component: () => import(/* webpackChunkName: "tencentcampaign" */ './views/create/tencent/Campaign.vue')
            },
            {
              path: 'plan',
              name: 'plan',
              component: () => import(/* webpackChunkName: "tencentplan" */ './views/create/tencent/Plan.vue')
            },
            {
              path: 'creative',
              name: 'creative',
              component: () => import(/* webpackChunkName: "tencentcreative" */ './views/create/tencent/Creative.vue')
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  cancelRequest() // 取消请求
  NProgress.done()
})

export default router
