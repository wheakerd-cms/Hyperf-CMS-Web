const isValidHostname = (hostname: string): boolean => {
    return /^(?!-)[A-Za-z0-9-]{1,63}(?=\.[A-Za-z]{2,})(?:\.[A-Za-z0-9-]{2,})*$/.test(hostname);
};

const getAppName = (): string | null => {
    if ('development' === process.env.NODE_ENV) {
        console.log(window.location.pathname);
    }
    const match: string[] = window.location.hostname.split('.');

    if (3 === match.length) {
        return match[0];
    }

    return null;
};

export {
    isValidHostname,
    getAppName,
};
