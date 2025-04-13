//  types/env.d.ts
/// <reference types="@rsbuild/core/types" />

declare global {
    interface ImportMetaEnv {
        readonly env: ImportMetaEnv;
        readonly RSBUILD_ROUTER_HISTORY: string;
    }
}

declare module '*.vue' {
    import type {DefineComponent,} from 'vue';

    // biome-ignore lint/complexity/noBannedTypes: reason
    const component: DefineComponent<{}, {}, any>;
    // noinspection JSUnusedGlobalSymbols
    export default component;
}
