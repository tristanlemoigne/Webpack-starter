const path = require('path');
const Fiber = require('fibers');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        watchContentBase: true,
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
        new HtmlWebpackPlugin({ 
            filename: 'index.html',
            template: 'src/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new CopyPlugin([
            { from: 'assets', to: 'assets'}
        ]),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.css', '.scss']
    }
}
