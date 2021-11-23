import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue'

const routes = [
    // 404
    // {
    //   path: '/:pathMatch(.*)*',
    //   component: () => import('../components/404.vue')
    // },
    // 首頁
    { path: '/theF2E_2021_w1', name: 'Home', component: Home },
    // 篩選器主頁
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search.vue'),
      // 槽狀結構
      children: [
        {
          path: 'spots',
          name: 'spots',
          component: () => import('../views/Spots.vue')
        },
        {
          path: 'activities',
          name: 'activities',
          component: () => import('../views/Activities.vue')
        },
        {
          path: 'food',
          name: 'food',
          component: () => import('../views/Food.vue')
        },
        {
          path: 'living',
          name: 'living',
          component: () => import('../views/Living.vue')
        },
        {
          path: 'transportation',
          name: 'transportation',
          component: () => import('../views/Transportation.vue')
        },
      ]
    },
    // 城市頁面
    {
      path: '/cities',
      name: 'cities',
      component: () => import('../views/Cities.vue')
    },
    // 腳踏車頁面
    {
      path: '/bike',
      name: 'Bike',
      component: () => import('../views/Bike.vue')
    },
    // 腳踏車-找Youbike
    {
      path: '/youbikeSpots',
      name: 'Youbike',
      component: () => import('../views/YoubikeSpots.vue')
    },
    // 腳踏車-找路線
    {
      path: '/cyclingRoute',
      name: 'CyclingRoute',
      component: () => import('../views/CyclingRoute.vue')
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;