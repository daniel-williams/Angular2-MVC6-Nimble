var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pkg = require('./package.json');

var PROJECT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(PROJECT_PATH, 'app');
var WEB_PATH = path.resolve(PROJECT_PATH, 'Web');
var DIST_PATH = path.resolve(WEB_PATH, 'content/scripts');


module.exports = {
    entry: {
        'app': path.join(APP_PATH, 'main.ts'),
        'vendors': path.join(APP_PATH, 'vendors.ts'),
        'style': path.join(APP_PATH, 'styles.scss')
    },
    output: {
        path: DIST_PATH,
        filename: '[name]-[hash:6].js'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts',
            exclude: [
                /node_modules/
            ]
        }, {
            test: /\.json$/,
            loader: "json"
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.scss$/,
            loader: "style!css!autoprefixer?browsers=last 2 versions!sass"
        }],
        noParse: [/angular2\/bundles\/.+/],
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.html', '.scss']
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        pkg: pkg,
        template: path.join(WEB_PATH, 'index.html')
    })]
};
