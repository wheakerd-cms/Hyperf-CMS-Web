import {
    App,
    createApp,
} from 'vue';
import AppElement from './App.vue';
import './index.scss';
import router from '@/application/admin/router';

const app: App<Element> = createApp(AppElement);

app.use(router);

app.mount('#root');
