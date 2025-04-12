/// <reference types="@rsbuild/core/types" />

interface ImportMetaEnv {
    readonly env: ImportMetaEnv;
    readonly RSBUILD_ROUTER_HISTORY: string;
}

declare module '*.vue' {
    import type {DefineComponent,} from 'vue';

    // biome-ignore lint/complexity/noBannedTypes: reason
    const component: DefineComponent<{}, {}, any>;
    // noinspection JSUnusedGlobalSymbols
    export default component;
}
