var path = require('path');

var PROJECT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(PROJECT_PATH, 'app');
var WEB_PATH = path.resolve(PROJECT_PATH, 'Web/wwwroot');
var DIST_PATH = path.resolve(WEB_PATH, 'content/bundles');


module.exports = {
    entry: {
        'app': [
          path.join(APP_PATH, 'main.ts'),
          'webpack/hot/only-dev-server'
        ],
        'vendors': path.join(APP_PATH, 'vendors.ts')
    },
    output: {
        path: DIST_PATH,
        filename: '[name].bundle.js',
        publicPath: 'http://localhost:8080/content/bundles/',
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
            loader: "raw!autoprefixer?browsers=last 2 versions!sass"
        }],
        noParse: [/angular2\/bundles\/.+/],
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.html', '.scss']
    }
};
