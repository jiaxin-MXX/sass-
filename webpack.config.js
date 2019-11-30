const path=require('path')
module.exports={
    mode: 'development',
    entry:{
        app:path.resolve(__dirname,'./src/index.js')
    },
    output:{
        path:path.resolve(__dirname,'./dist/js'),
        filename:'[name].js'
    },
    devServer:{
        contentBase:'./',
        compress:true,
        port:9000
    }
}