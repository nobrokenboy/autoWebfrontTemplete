var express=require('express');
var router=express.Router();
router.get('/',function (req,res) {//views下对应的模板名称,{}就是模板中options参数
    res.render('login', { username: 'Tobi' });
});
module.exports=router;