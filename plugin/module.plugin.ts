const appModules: Rspack.Context = import.meta.webpackContext('/src/application', {
    recursive: true,
    regExp: /^\.\/[^/]+\/index\.ts$/,
    mode: 'eager',
});
const viewModules: Rspack.Context = import.meta.webpackContext('/src', {
    recursive: true,
    regExp: /^\.\/(?:views\/|application\/[^/]+\/views\/)([a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]+\.(tsx|vue)$/,
    mode: 'eager',
});

export {
    appModules,
    viewModules,
};
