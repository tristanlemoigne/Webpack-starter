const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const Fiber = require('fibers');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack starter'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}

// module: {
//     rules: [
//         {
//             test: /\.scss$/,
//             use: [{
//                 loader: "style-loader"
//             }, 
//             {
//                 loader: "css-loader"
//             }, 
//             {
//                 loader: "sass-loader",
//                 options: {
//                     implementation: require("sass"),
//                     fiber: Fiber
//                 }
//             }]
//         },
//         {
//             test: /\.(png|svg|jpg|gif)$/,
//             use: [
//             'file-loader'
//             ]
//         },
//         {
//             test: /\.(woff|woff2|eot|ttf|otf)$/,
//             use: [
//             'file-loader'
//             ]
//         }
//     ]
// }