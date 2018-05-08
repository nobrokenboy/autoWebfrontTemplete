var express=require('express');
var router=express.Router();
//
router.use(function middleWare(req,res,next){//调用路由时会调用到路由的中间件
   /* res.send('<h1>登录有误</h1>');*/
    console.log('Time: ', Date.now());
    next();
});
router.get('/',function (req,res,next) {
    res.send('<h1>登录成功</h1>');
});
router.get('/about',function (req,res,next) {
    res.send('<h1>关于我们</h1>');
});
module.exports=router;

