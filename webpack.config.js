const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src/public/scripts/index.es'),
    output: {
        path: path.join( __dirname, '/build/public'), // 打包后的文件存放的地方
        filename: 'scripts/[name]-[hash:5].js', // 打包后输出文件的文件名,带有md5 hash戳
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, '/build/views'), // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转
        inline: true // 实时刷新
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js|\.es)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/ // 不进行编译的目录
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: {
                    loader: 'css-loader'
                }
            })
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
        	filename: '../views/index.html',
            template: path.join( __dirname, 'src/views/index.html') // new 一个这个插件的实例，并传入相关的参数
        }),
        new ExtractTextPlugin('styles/style-[hash:5].css'),
        new CleanWebpackPlugin(['build/public/*', 'build/views/*'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'scripts/common/vendor-[hash:5].js'
        })]
}