var login=require('./login');
module.exports=function(app){
    app.use('/login',login);
}