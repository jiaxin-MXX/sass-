const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports={
    mode: 'development',
    entry:{
        app:path.resolve(__dirname,'./src/index.js')
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: [ 
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // 这里可以指定一个 publicPath
                          // 默认使用 webpackOptions.output中的publicPath
                          publicPath: '/'
                        },
                    },
                    
                    'css-loader' 
                ]
            },
            {
                test: /\.scss$/,
                use: [ 
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // 这里可以指定一个 publicPath
                          // 默认使用 webpackOptions.output中的publicPath
                          publicPath: '/'
                        },
                    },
                     
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:path.resolve(__dirname,'./src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
        }),
    ],
    devServer:{
        contentBase: path.join(__dirname, "./dist"),
        port:9000
    }
}