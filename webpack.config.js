
const path = require('path');

var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    // React.js is a single page application (SPA) and this
    // file is the template file for serving the application.
    template: path.resolve(__dirname, 'src', 'index.html'),
    filename: "index.html",
    inject: 'body'
});

var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].css',
    chunkFilename: '[id].css',
});

module.exports = {
    // The application's entry point. It will pull everything
    // that's needed in the entry point and put the output of
    // the bundling process into the build directoy, named bundle.js
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    // Since webpack bundles the code, source maps are mandatory to get
    // a reference to the original file that raised the error. For example,
    // if you bundle three source files (a.js, b.js, and c.js) into one
    // bundle (bundler.js) and one of the source files contains an error,
    // the stack trace will simply point to bundle.js. problematic as you
    // probably want to know exactly if it’s the a, b, or c file that is
    // causing an error. The below setting will instruct webpack to generate
    // source maps. Note this will cause a slower build but it has no effect
    // on production. Sourcemaps are only downloaded if you opent the browser's
    // DevTool.
    devtool: 'inline-source-map',
    // These options change how modules are resolved.
    resolve: {
        // Attempt to resolve these extensions in order.
        // If multiple files share the same name but have different
        // extensions, webpack will resolve the one with the extension
        // listed first in the array and skip the rest.
        // It will automatically resolve certain extensions. This defaults
        // to `[ "", ".webpack.js", ".web.js", ".js" ]` which is what enables
        // users to leave off the extension when importing...
        // `import File from '../path/to/file'`
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            // For every file with a js or jsx extension Webpack
            // pipes the code through the babel-loader for transforming
            // ES6 down to ES5.
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                // any file having name matching with the regular
                // expression /\.(s*)css$/i.e. any .scss or .css file.
                test: /\.(s*)css$/,
                // NOTE: loaders are chained in the reverse order
                // Chain sass-loader, then css-loader and then
                // chain their output to sytle-loader (Loader-chaining)
                exclude: /node_modules/,
                use: [
                    // creates `style` nodes from JS strings
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    // translates CSS into CommonJS
                    'css-loader',
                    // compiles Sass to CSS
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        HTMLWebpackPluginConfig,
        MiniCssExtractPluginConfig
    ],
    stats: {
        // https://stackoverflow.com/questions/52013133/entrypoint-undefined-index-html-using-htmlwebpackplugin
        children: false
    }
};
