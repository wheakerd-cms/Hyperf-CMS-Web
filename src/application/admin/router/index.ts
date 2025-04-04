import {
    createRouter,
    createWebHistory,
    type Router,
} from 'vue-router';

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/login',
            name: 'login',
            redirect: '/login/password',
            children: [
                {
                    path: 'password',
                    name: 'login-password',
                    component: () => import('@/application/admin/views/login/password/index.vue',),
                },
            ],
        },
        {
            path: '/home',
            name: 'home',
            redirect: '/home/index',
            component: () => import('@/application/admin/layout/index.vue',),
            children: [
                {
                    path: 'index',
                    name: 'home-index',
                    component: () => import('@/application/admin/views/home/index/index.vue',),
                },
            ],
        },
        {
            path: '/permission',
            name: 'permission',
            component: () => import('@/application/admin/layout/index.vue',),
            children: [
                {
                    path: 'menu',
                    name: 'permission-menu',

                    component: () => import('@/application/admin/views/permissions/menu/index.vue',),
                },
            ],
        },
        {
            path: '/404',
            name: '404',
            component: () => import('@/views/404.vue',),
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            redirect: '/404',
        },
    ],
});

export default router;
