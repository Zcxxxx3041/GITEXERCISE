const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin') //html插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //单独提取css文件插件
module.exports = {
    // entry:{
    //     one:'./src/index.js',
    //     two:'./src/index2.js'
    // },
    // entry:{
    //     vendor:['./src/js/jq.js','./src/js/api.js'],  //合并成一个js文件
    //     index:'./src/js/index.js',
    //     car:'./src/js/car.js'
    // },
    entry:'./src/index.js',
    output:{
        filename:"[name].js",
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader'] 
            },
            
            // {
            //     test:/\.css$/,
            //     use:['style-loader','css-loader'] //从右到左的执行顺序 或者 从下到上
            // },
            {
                test:/\.less$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','less-loader','postcss-loader']  // less less-loader
            },
            {
                test:/\.scss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader','postcss-loader'] //node-sass sass-loader(scss)
            }
        ]
    },
    plugins:[
        // 默认会创建一个空，目的就是自动引入打包的资源(js/css) //production环境会自动压缩代码
        // template 指定的模板 filename 输出的名字 minify
        // new htmlWebpackPlugin({  
        //     template:'./src/index.html',
        //     filename:'index.html',
        //     chunks:['index','vendor'], //指定添加的js文件
        //     minify:{
        //         // 移除空格
        //        collapseWhitespace:true,

        //        //移除注释
        //        removeComments:true
        //     }
        // }),
         new htmlWebpackPlugin({
             template:'./src/index.html',
             filename:'index.html'
         }),
         new MiniCssExtractPlugin({
             filename:'index.css', 
         })
         

    ],
    mode:'development'
}