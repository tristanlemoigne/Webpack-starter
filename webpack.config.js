const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const Fiber = require('fibers');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack starter'
        })
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