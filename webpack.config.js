const path = require('path');

const webpack = require('webpack');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
    },
    plugins: [
        new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        }),
    ],
};
