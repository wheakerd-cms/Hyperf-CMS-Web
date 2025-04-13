import type {RouteRecordRaw,} from 'vue-router';

import {$t,} from '#admin/locales';

const routes: RouteRecordRaw[] = [
    {
        meta: {
            icon: 'lucide:layout-dashboard',
            order: -1,
            title: $t('page.dashboard.title'),
        },
        name: 'Dashboard',
        path: '/dashboard',
        children: [
            {
                name: 'Analytics',
                path: '/analytics',
                component: () => import('#admin/views/dashboard/analytics/index.vue',),
                meta: {
                    affixTab: true,
                    icon: 'lucide:area-chart',
                    title: $t('page.dashboard.analytics'),
                },
            },
            {
                name: 'Workspace',
                path: '/workspace',
                component: () => import('#admin/views/dashboard/workspace/index.vue',),
                meta: {
                    icon: 'carbon:workspace',
                    title: $t('page.dashboard.workspace'),
                },
            },
        ],
    },
];

export default routes;
