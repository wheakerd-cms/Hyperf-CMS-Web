import {
    createRouter,
    createWebHistory,
    type Router,
} from 'vue-router';
import appPlugin from '@/plugin/app.plugin.ts';
import {useUserStoreWithOut,} from '@/application/admin/stores/userStore.ts';

console.log(appPlugin.baseUrl);

// const loginRoutes = [
//     {
//         path: '/',
//         redirect: '/home',
//     },
//
//     {
//         path: '/home',
//         name: 'home',
//         redirect: '/home/index',
//         component: () => import('@/application/admin/layouts/index._vue',),
//         children: [
//             {
//                 path: 'index',
//                 name: 'home-index',
//                 component: () => import('@/application/admin/views/home/index/index._vue',),
//             },
//         ],
//     },
//     {
//         path: '/permission',
//         name: 'permission',
//         component: () => import('@/application/admin/layouts/index._vue',),
//         children: [
//             {
//                 path: 'menu',
//                 name: 'permission-menu',
//
//                 component: () => import('@/application/admin/views/permissions/menu/index._vue',),
//             },
//         ],
//     },
// ];

const router: Router = createRouter({
    history: createWebHistory(appPlugin.baseUrl),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/application/admin/views/_core/authentication/code-login.vue',),
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

router.beforeEach((to, _, next) => {
    const userStore = useUserStoreWithOut();
    // getLoggedIn
    if (userStore.getLoggedIn) {
        if (to.path === '/login') {
            next('/');
        }
    } else {
        console.log('/login'.includes(to.path), to.path);
        if ('/login'.includes(to.path)) {

            next();
        } else {
            next(`/login?redirectTo=${to.path}`);
        }
    }
});

export default router;
