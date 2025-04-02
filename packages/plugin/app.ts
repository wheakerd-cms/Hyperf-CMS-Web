const servers: Record<string, string> = {
    'www': 'index',
    'admin': 'admin',
};

let appName: undefined | string = servers[Object.keys(servers)[0]];

if ('development' === process.env.NODE_ENV) {
    console.log(window.location.pathname);
    const match: string[] = window.location.pathname.split('/');

    appName = match[2];
} else {
    const match: string[] = window.location.hostname.split('.');
    if (3 === match.length) {
        appName = match[0];
    }
}

export {appName,};
