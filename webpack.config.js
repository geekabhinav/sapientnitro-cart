var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    context: __dirname,
    entry: './app/assets/js/main.js',
    output: {
        path: __dirname + '/public',
        publicPath: '/public/',
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw-loader',
                query: {
                    cacheDirectory: true,
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
            },
            {
                test: /\.(jpeg|jpg|png)$/,
                loader: 'file?name=imgs/[name].[ext]'
            }

            // You could also use other loaders the same way. I. e. the autoprefixer-loader

        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css")
    ],
    devServer: {
        inline: true,
        contentBase: __dirname + '/app',
        watchOptions: { aggregateTimeout: 300, poll: 1000 }
    }
};