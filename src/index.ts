import appPlugin from '@/plugin/app.plugin.ts';
import {appModules,} from '@/plugin/module.plugin.ts';

//  搜索应用，默认 index 应用
(async () => {
    const path = `./${appPlugin.name}/index.ts`;

    if (!appModules.keys().includes(path)) {
        throw new Error(`Application not found：${appPlugin.name}`);
    }

    await appModules(path);
})();
