import forEach from 'lodash/forEach';
import filter from 'lodash/filter';


var _isType = function(type, obj) {
    var _class = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && _class === type;
};
var _deepExtend = function(out) {
    out = out || {};
    for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];
        if (!obj)
            continue;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (_isType('Object', obj[key]) && obj[key] !== null)
                    _deepExtend(out[key], obj[key]);
                else
                    out[key] = obj[key];
            }
        }
    }
    return out;
};
var hasClass = function(el, className) {
    if (!className) return false;
    if (el.classList) {
        return el.classList.contains(className);
    } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
};
var addClass = function(el, className) {
    if (!className) return;
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
}

var removeClass = function(el, className) {
    if (!className) return;
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}

var getQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}

var isEmpty = function(str) {
    if(str==null){
        return true
    }
    str = str.toString();
    str = str.replace(/\ +/g, "");
    str = str.replace(/[ ]/g, "");
    str = str.replace(/[\r\n]/g, "");
    if(str==""){
        return true
    }else{
        return false
    }
}

var createUUID=function () {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}
// 设置cookie
var setCookie = function(c_name,value,min) {
    //以分钟为单位，如果没有默认一天过期
    min = (min==null)?1440*1000:min*1000;
    var exdate=new Date()
    exdate.setTime(exdate.getTime() + 60 * min)
    if(window.localStorage){
        localStorage[c_name]=JSON.stringify({
            value:value,
            expire: Date.parse(exdate)

        })
        return value;
    }else{
        document.cookie=c_name+ "=" +escape(value)+
            ((min==null) ? "" : ";expires="+exdate.toGMTString())
        var c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1){
            c_start=c_start + c_name.length+1
            var c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
}
//获取cookie
var getCookie = function(c_name){

    if(window.localStorage){
        if(!localStorage[c_name]){
            return false
        }
        var obj = JSON.parse(localStorage[c_name])
        if(Date.now()>new Date(obj.expire)){
            localStorage.removeItem(c_name);
            return false
        }else{
            return obj.value
        }
    }else{
        if (document.cookie.length>0){
            var c_start=document.cookie.indexOf(c_name + "=")
            if (c_start!=-1)
            {
                c_start=c_start + c_name.length+1
                var c_end=document.cookie.indexOf(";",c_start)
                if (c_end==-1) c_end=document.cookie.length
                return unescape(document.cookie.substring(c_start,c_end))
            }
        }
        return false
    }

}
//canvas转化为image
var transferCanvasToImage=function (canvas) {
    var image=new Image();
    image.src=canvas.toDataURL('image/png');
    return image;
}
//image转化为canvas
var transferImageToCanvas=function (image) {
    var canvas=document.createElement('canvas');
    canvas.width=image.width;
    canvas.height=image.height;
    canvas.getContext("2d").drawImage(image,0,0);
    return canvas;
}

module.exports = {
    forEach,
    filter,
    deepExtend:_deepExtend,
    hasClass,
    addClass,
    removeClass,
    getQueryString,
    isEmpty,
    createUUID,
    setCookie,
    getCookie,
    transferCanvasToImage,
    transferImageToCanvas
}