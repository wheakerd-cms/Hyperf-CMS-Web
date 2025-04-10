import {reactive,} from 'vue';

type AppPluginType = {
    name: string,
    defaultApp: string,
    baseUrl: string,
    servers: Record<string, string>,
};

const appPlugin: AppPluginType = reactive({
    name: 'index',
    defaultApp: 'index',
    baseUrl: import.meta.env.BASE_URL,
    servers: {
        'www': 'index',
        'admin': 'admin',
    },
});

const match: string[] = (process.env.NODE_ENV === 'development')
    ? window.location.pathname.split('/')
    : window.location.hostname.split('.');

appPlugin.name = appPlugin.servers[match[1]] || appPlugin.servers[match[0]] || appPlugin.name;

if (process.env.NODE_ENV === 'development') {
    appPlugin.baseUrl = import.meta.env.BASE_URL + appPlugin.name;
}

export default appPlugin;
