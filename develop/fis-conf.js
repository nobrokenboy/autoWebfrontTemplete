var rootUrl="../output";
//环境切换
var staticFilesDir="/public/";
var viewsFilesDir="/views";
//忽略构建
fis.set('project.ignore',[
    'node_modules/**','fis-conf.js','.idea/**','.babelrc','package.json','webpack.config.js'
]);
//本地部署,根路径
fis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: rootUrl
    })
});
//images
fis.match('/application/((images)/(**)/(*.{png,svg,jpg,gif}))',{
    release:staticFilesDir+"/$1",
});
//styles
fis.match('/application/styles/(public.less)',{
    parser:fis.plugin('less'),
    rExt:'.css',
    postprocessor:fis.plugin('postcss',{
        sourceMap:false
    }),
    release:staticFilesDir+"/css/$1"//匹配到第一个括号
});
//js
fis.match('/application/scripts/(config.js)',{
    release:staticFilesDir+"/js/$1"
});
//plugins
fis.match('/application/((plugin)/(**)/(*.{js,css}))',{
    release:staticFilesDir+"/$1"
});

//pug的配置
var pugConf={
    pretty:true
};
//views->html同个路径下的相同文件会被覆盖
fis.match('/application/(views/**/(*.sx))',{
  /*  isHtmlLike:true,//*/
    rExt:".html",
    parser:fis.plugin('pug',pugConf),
    release:viewsFilesDir+"/$2"
});
//views->jsp
/*fis.match('/application/views/(**)/(*.sx)',{
    isHtmlLike:true,
    rExt:".jsp",
    parser:fis.plugin('pug',pugConf),
    release:viewsFilesDir+"/$1"
});*/




//发布到测试环境的
/*fis.media('test').
    match("",{

    });
//发布到正式环境
fis.media('prop').
    match("",{

    });*/


