const servers: Record<string, string> = {
    'www': 'index',
    'admin': 'admin',
};

const appModules: Rspack.Context = import.meta.webpackContext('/src/application', {
    recursive: true,
    regExp: /^\.\/[^/]+\/index\.ts$/,
    mode: 'eager', // 预加载
});

//  搜索应用，默认 index 应用
(async () => {
    let appName: undefined | string;

    if ('development' === process.env.NODE_ENV) {
        const match: string[] = window.location.pathname.split('/');

        appName = match[1];
    } else {
        const match: string[] = window.location.hostname.split('.');
        appName = match[0];
    }

    const app = servers[appName] || servers[Object.keys(servers)[0]];

    const path = `./${app}/index.ts`;

    if (!appModules.keys().includes(path)) {
        throw new Error(`Application not found：${app}`);
    }

    await appModules(path);
})();
