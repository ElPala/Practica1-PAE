const path =require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.(jpg|png|gif|jpeg)$/,
            use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath:'img/',
                        useRelativePath: true
                        }
                    }
                ]
            }
        ]
    },
       
    plugins: [
        new CleanWebpackPlugin(), //para borrar dist
        new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
            }
        }) //crear index.html
    ]
}
