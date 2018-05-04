var webpack=require('webpack');
var path=require('path');
//输出入口根目录
const rootUrl='../output/public';
module.exports={
    mode:'development',
    entry:{
        app:'./application/scripts/app.js'
    },
    output:{
        path:path.resolve(__dirname,rootUrl+"/js"),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/(node_modules)/,
                options:{
                    presets:['env']
                }
            }
        ]
    }
};

/*if (process.env.NODE_ENV === 'development') {
    // module.exports.devtool = 'eval-source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            ENV_PRO: JSON.stringify(false)
        }),
    ])
}
if (process.env.NODE_ENV === 'test') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            ENV_PRO: JSON.stringify(false)
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            ENV_PRO: JSON.stringify(true)
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}*/
