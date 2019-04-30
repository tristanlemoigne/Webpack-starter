const path = require('path');
const Fiber = require('fibers');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [{
                    loader: "style-loader"
                }, 
                {
                    loader: "css-loader"
                }, 
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass"),
                        fiber: Fiber
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin([
            { from: 'src/index.html' }, 
            { from: 'assets', to: 'assets'}
        ])
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')

    },
    resolve: {
        extensions: ['.js', '.json', '.css', '.scss']
    }
}