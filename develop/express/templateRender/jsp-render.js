var fs=require('fs');
function jspRender(filePath,options,callback) {
    fs.readFile(filePath,function (err,content) {
        if(err) return callback(new Error(err));
        var rendered=content.toString().replace(/\<%@/g,'<!--').replace(/\%>/g,'-->');
        return callback(null,rendered);
    });
}

exports=module.exports=jspRender;