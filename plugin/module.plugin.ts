const appModules: Rspack.Context = import.meta.webpackContext('/src', {
    recursive: true,
    regExp: /^\.\/[^/]+\/index\.ts$/,
    mode: 'eager',
});
// const viewModules: Rspack.Context = import.meta.webpackContext('/', {
//     recursive: true,
//     regExp: /^\.\/(?:views\/|src\/[^/]+\/views\/)([a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]+\.(tsx|vue)$/,
//     mode: 'eager',
// });

// console.log(viewModules.keys());

export {
    appModules,
    // viewModules,
};
