// 获取 应用 所有模块
import {Router,} from 'vue-router';

const appModules: Rspack.Context = import.meta.webpackContext('/src/app', {
    recursive: true,
    regExp: /^\.\/[^/]+\/index\.ts$/,
    mode: 'eager', // 预加载
});

// 获取 路由 所有模块
const routerModules: Rspack.Context = import.meta.webpackContext('/src/app', {
    recursive: true,
    regExp: /\/*\/router\/index\.ts$/,
    mode: 'eager', // 预加载
});

const viewModules: Record<string, unknown> = [] as unknown as Record<string, unknown>;

const run = async (app: string): Promise<void> => {
    const path = `./${app}/index.ts`;

    if (!appModules.keys().includes(path)) {
        throw new Error(`Application not found：${app}`);
    }

    await appModules(path);
};
const getRouter = async (app: string): Promise<Router> => {
    const path = `./${app}/router/index.ts`;

    if (!routerModules.keys().includes(path)) {
        throw new Error(`Application route not found：${app}`);
    }

    const router: {
        default: (name: string) => Router,
    } = await routerModules(path) as unknown as { default: (name: string) => Router };

    return router.default as unknown as Router;
};
const getRouters = (): Array<{ [key: string]: Router }> => {
    return routerModules as unknown as Array<{ [key: string]: Router }>;
};
const getViewer = (component: string) => {
    const vuePath: string = `/src/app/${component}/.vue`;
    const tsxPath: string = `/src/app/${component}/.tsx`;

    const comModule: unknown | undefined = viewModules [vuePath] || viewModules [tsxPath];

    if (!comModule && !component.includes('#')) {
        throw new Error(
            `View model missing: ${vuePath} or ${tsxPath} file not found, please create`
        );
    }
};
const getViews = (): Array<{ [key: string]: Router }> => {
    return viewModules as unknown as Array<{ [key: string]: Router }>;
};

export {
    run,
    getRouter,
    getViewer,
    getRouters,
    getViews,
};
