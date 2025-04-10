import './index.css';
import './index.scss';

import {
    App,
    createApp,
} from 'vue';
import AppElement from './App.vue';
import ElementPlus from 'element-plus';
import router from '@/application/admin/router';
import {setupStore,} from '@/plugin/pinia.plugin.ts';

const app: App<Element> = createApp(AppElement);

app.use(router);
setupStore(app);
app.use(ElementPlus);

app.mount('#root');
