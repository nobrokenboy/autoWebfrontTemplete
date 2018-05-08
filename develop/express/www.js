var express=require('express');
var app=express();//
var jsp=require('./templateRender/jsp-render');
//定义引擎
//app.engine('jsp',jsp);
app.engine('html',require('ejs').renderFile);
//路径相对于当前跑命令的路径
var publicPath='../output';
app.set('views',publicPath+'/views');
//使用引擎,
// app.set('view engine','jsp');
app.set('view engine','html');
app.use('/static',express.static(publicPath+'/public'));

app.get('/',function (req,res) {
    res.send('<h1>Hello World!</h1>');
});

//引入接口
/*require('./interface/index')(app);*/
//路由
require('./router/index')(app);
//引入渲染的模板
var server=app.listen(3000,function(){
    var host=server.address().address;
    console.log(host);
    var port=server.address().port;

    console.log('EX app listening at http://%s:%s',host,port);
});

app.use(function(req,res,next){//404
   res.status(404)
       .send('<h1>不好意思，您要的页面找不到</h1>');
   next();
});



