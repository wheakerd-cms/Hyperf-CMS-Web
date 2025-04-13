import type {
    ComponentRecordType,
    GenerateMenuAndRoutesOptions,
} from '@vben/types';

import {generateAccessible,} from '@vben/access';
import {preferences,} from '@vben/preferences';

import {ElMessage,} from 'element-plus';

import {getAllMenusApi,} from '#admin/api';
import {
    BasicLayout,
    IFrameView,
} from '#admin/layouts';
import {$t,} from '#admin/locales';

const forbiddenComponent = () => import('#admin/views/_core/fallback/forbidden.vue',);

async function generateAccess(options: GenerateMenuAndRoutesOptions) {
    const pageMap: ComponentRecordType = import.meta.webpackContext('../views', {
        recursive: true,
        regExp: /\.vue$/,
        mode: 'eager',
    });

    const layoutMap: ComponentRecordType = {
        BasicLayout,
        IFrameView,
    };

    return await generateAccessible(preferences.app.accessMode, {
        ...options,
        fetchMenuListAsync: async () => {
            ElMessage({
                duration: 1500,
                message: `${$t('common.loadingMenu')}...`,
            });
            return await getAllMenusApi();
        },
        // 可以指定没有权限跳转403页面
        forbiddenComponent,
        // 如果 route.meta.menuVisibleWithForbidden = true
        layoutMap,
        pageMap,
    });
}

export {generateAccess,};
