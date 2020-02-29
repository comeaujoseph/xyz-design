
/* eslint-disable camelcase */

const path = require('path');

const root = path.resolve(__dirname, '../../');
const rootPath = path.resolve.bind(path, root);

const node_modules = rootPath('node_modules')

const watchPaths = {
    css: [rootPath('assets/**/*.css')],
    sass: [rootPath('scss/**/*.scss'), rootPath('design-tokens/*.scss')],
    js: [
        rootPath('src/**/*.{js,jsx}')
    ],
    tokens: [
        rootPath('src/**/tokens/*.scss'),
        rootPath('design-tokens/**/*.scss')
    ]
};

module.exports = {
    root,
    rootPath,
    node_modules,

    assets: rootPath('assets'),
    ui: rootPath('src'),
    designTokens: rootPath('design-tokens'),

    css: rootPath('.css'),
    dist: rootPath('.dist'),
    build: rootPath('.build'),
    generated: rootPath('.generated'),
    html: rootPath('.html'),
    tmp: rootPath('.tmp'),
    test: rootPath('.test'),
    logs: rootPath('.logs'),
    reports: rootPath('.reports'),

    watch: watchPaths
};
