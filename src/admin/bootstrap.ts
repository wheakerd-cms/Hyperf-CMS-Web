import {
    createApp,
    watchEffect,
} from 'vue';

import {registerAccessDirective,} from '@vben/access';
import {
    initTippy,
    registerLoadingDirective,
} from '@vben/common-ui';
import {MotionPlugin,} from '@vben/plugins/motion';
import {preferences,} from '@vben/preferences';
import '@vben/styles';
import '@vben/styles/ele';

import {useTitle,} from '@vueuse/core';
import {ElLoading,} from 'element-plus';

import {initComponentAdapter,} from './adapter/component';
import App from './App.vue';
import {router,} from './router';
import {initStores,} from '@/packages/stores/src';

async function bootstrap(namespace: string) {
    // 初始化组件适配器
    await initComponentAdapter();
    // // 设置弹窗的默认配置
    // setDefaultModalProps({
    //   fullscreenButton: false,
    // });
    // // 设置抽屉的默认配置
    // setDefaultDrawerProps({
    //   zIndex: 2000,
    // });
    const app = createApp(App);

    // 注册Element Plus提供的v-loading指令
    app.directive('loading', ElLoading.directive);

    // 注册Vben提供的v-loading和v-spinning指令
    registerLoadingDirective(app, {
        loading: false, // Vben提供的v-loading指令和Element Plus提供的v-loading指令二选一即可，此处false表示不注册Vben提供的v-loading指令
        spinning: 'spinning',
    });

    // 国际化 i18n 配置
    // await setupI18n(app);

    // 配置 pinia-tore
    await initStores(app, {
        namespace,
    });

    // await setupStore(app);
    // 安装权限指令
    registerAccessDirective(app);
    // 初始化 tippy
    initTippy(app);
    // 配置路由及路由守卫
    app.use(router);
    // 配置Motion插件
    app.use(MotionPlugin);
    // 动态更新标题
    watchEffect(() => {
        if (preferences.app.dynamicTitle) {
            const routeTitle = router.currentRoute.value.meta?.title;
            const pageTitle =
                (routeTitle ? `${routeTitle} - ` : '') + preferences.app.name;
            useTitle(pageTitle);
        }
    });

    app.mount('#root');
}

export {bootstrap,};
