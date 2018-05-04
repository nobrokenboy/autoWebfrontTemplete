import {deepExtend,forEach} from '../utils'

class Ajax{
    constructor(conf){
        this.args = {
            url:"",
            data:{},
            headers:{},
            type:"",
            success:()=>{

            },
            fail:()=>{
            },
            complete:()=>{

            },
        }
        if(window.XMLHttpRequest) {
            //IE7+、Firefox、Chrome、Safari...
            this.xhr = new XMLHttpRequest();
        } else {
            //IE5 和 IE6
            this.xhr = new ActiveXObject('Microsoft.XMLHttp');
        }
    }
    Abort(){
        if(this.xhr.abort){
            this.xhr.abort()
        }
    }
    Request(conf){
        var args = deepExtend(conf,this.args)
        //open的时候才能setheader
        forEach(args.headers,(val,name)=>{
            this.xhr.setRequestHeader(name,val)
        })
        this.xhr.timeout = 10000;
        this.xhr.onreadystatechange=()=>{
            if(this.xhr.readyState==4) {
                if(this.xhr.status==200) {
                    args.complete(parseJson(this.xhr.responseText))
                }else {
                    args.complete(parseJson(this.xhr.responseText))
                }
            }
            if(this.xhr.readyState==3){
                if(this.xhr.status!=200) {
                    dialog.show(`
                    <p class="pd-t-m">接口：${this.xhr.responseURL}</p>
                    <p>状态：${this.xhr.status}</p>
                `)
                }
            }
        };
        this.xhr.onerror = ()=>{
            dialog.show(`
                    <p class="pd-t-m">接口：${this.xhr.responseURL}</p>
                    <p>请求错误！</p>
                `)
        }
        this.xhr.ontimeout = () =>{
            console.log(this)
            dialog.show(`
                    <p class="pd-t-m">接口：${this.xhr.responseURL}</p>
                    <p>请求超时！</p>
                `)
        }
        function parseJson(res) {
            if(!res.match("^\{(.+:.+,*){1,}\}$")){
                return res
            }else{
                return JSON.parse(res)
            }
        }
    }
    Get(conf){
        let index = 0;
        //get方法要拼字符串
        forEach(conf.data,(val,name)=>{
            let symbol = "&"
            if(index==0){
                symbol = "?"
            }
            conf.url += symbol+name+"="+val
            index++;
        })
        this.xhr.open("GET", conf.url);
        this.Request(conf)
        this.xhr.send();
    }
    Post(conf){
        this.xhr.open("POST", conf.url);
        this.Request(conf)
        if(conf.type=="json") {
            conf.data = JSON.stringify(conf.data)
        }
        if(conf.type=="form") {
            var index = 0;
            var data = ""
            forEach(conf.data,(val,name)=>{
                let symbol = "&"
                if(index==0){
                    symbol = ""
                }
                data += symbol+name+"="+val
                index++;
            })
            conf.data = data
        }
        this.xhr.send(conf.data)
    }
    Jsonp(conf){
        var args = deepExtend(conf,this.args)
        var tag = document.createElement('script');
        var randomStr = "_"+Math.random().toString(16).substring(2)
        let index = 0;
        //判断是否有传进callback name，没有的话要拼字符串加callback
        const callbackName = (args.jsonCallback)?args.jsonCallback:"Jsonp" + Date.parse(new Date())/1000 + randomStr;
        forEach(args.data,(val,name)=>{
            if(index==0){
                //是否已经带参数
                if(args.url.includes("?")){
                    args.url += "&callback=" + callbackName
                }
                else{
                    args.url += "?callback=" + callbackName
                }
            }
            args.url += "&"+name+"="+val
            index++;
        })
        //暂时没有办法处理多级函数名
        var hasFunction = 0;

        window[callbackName] = (params) => {
            //记录该方法以及执行,防止多次callback
            if(hasFunction==0){
                hasFunction = 1
                args.complete(params)
                args.success(params)
            }
        }
        tag.setAttribute('type','text/javascript');
        tag.setAttribute('charset','utf-8');
        tag.setAttribute('src', args.url);
        document.getElementsByTagName('head')[0].appendChild(tag);
        tag.onload = (res) =>{
            window[callbackName]()
            document.getElementsByTagName('head')[0].removeChild(tag);
        }
        tag.onerror = (err)=> {
            args.complete()
        }

    }
}



export function GET(url,data,callback,args = {}){
    var ask = new Ajax();
    let conf = deepExtend({
        url:url,
        data:data,
        complete:callback,
    },args)
    ask.Get(conf)
    return ask
}

export function POST(url,data,callback,args={}){
    var ask = new Ajax();
    let conf = deepExtend({
        url:url,
        data:data,
        complete:callback,
    },args)
    ask.Post(conf)
    return ask
}

export function JSONP(url,data,callback,args={}){
    var ask = new Ajax();
    let conf = deepExtend({
        url:url,
        data:data,
        complete:callback,
    },args)
    ask.Jsonp(conf)
    return ask
}