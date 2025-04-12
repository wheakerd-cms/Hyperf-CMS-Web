import type {App,} from 'vue';
import {
    createPinia,
    type Pinia,
} from 'pinia';
// noinspection SpellCheckingInspection
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const store: Pinia = createPinia();

store.use(piniaPluginPersistedstate);

export const setupStore = async (app: App<Element>) => {
    app.use(store);
};

export {store,};
