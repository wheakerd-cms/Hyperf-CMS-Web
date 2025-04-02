import {
    defineConfig,
    rspack,
} from '@rsbuild/core';
import {pluginVue,} from '@rsbuild/plugin-vue';
import Dotenv from 'dotenv-webpack';
import {RsdoctorRspackPlugin,} from '@rsdoctor/rspack-plugin';
import {pluginBabel,} from '@rsbuild/plugin-babel';
import {pluginSass,} from '@rsbuild/plugin-sass';
import {pluginTypeCheck,} from '@rsbuild/plugin-type-check';
import {pluginVueJsx,} from '@rsbuild/plugin-vue-jsx';

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    mode: 'development',
    source: {
        entry: {
            index: './index.ts',
        },
    },
    server: {
        open: false,
    },
    dev: {
        progressBar: true,
        liveReload: true,
    },
    tools: {
        rspack: {
            plugins: [
                // 仅在 RS DOCTOR 为 true 时注册插件，因为插件会增加构建耗时
                process.env.RSDOCTOR && new RsdoctorRspackPlugin({}),
                new rspack.EnvironmentPlugin([
                    'RS_BUILD_GLOB_API_URL',
                ]),
                new Dotenv(),
                new rspack.CssExtractRspackPlugin({}),
            ],
        },
    },
    plugins: [
        pluginBabel({
            include: /\.(?:jsx|tsx)$/,
        }),
        pluginSass(),
        pluginVue(),
        pluginVueJsx(),
        pluginTypeCheck({
            enable: false,
        }),
    ].filter(Boolean),
});
