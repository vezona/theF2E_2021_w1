import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue'

const routes = [
    // 404
    // {
    //   path: '/:pathMatch(.*)*',
    //   component: () => import('../components/404.vue')
    // },
    // 首頁
    { path: '/', name: 'Home', component: Home },
    // 篩選器主頁
    {
        path: '/search',
        name: 'search',
        component: () => import('../views/search.vue'),
         // 槽狀結構
        children: [
            {
            path: 'Spots',
            name: 'Spots',
            component: () => import('../views/Spots.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;