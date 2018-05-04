function get(str,data,callback,config) {
    var ajax = {
        data: data,
        url: str,
        success:res=>{
            callback(res);
        },
        error:err=>{
            callback({error:1})
        }
    }
    if(config){
        ajax.headers = config.headers
    }
    return $.ajax(ajax)
}

function post(str,data,callback,config) {
    var ajax = {
        url: str,
        type: 'POST',
        data:data,
        success(res) {
            callback(res)
        },
        error(err){
            callback({error:1})
        },
    }
    if(config){
        ajax.contentType = config.contentType
        ajax.headers = config.headers
        if(config.dataType=="json"){
            ajax.data = JSON.stringify(data)
        }
    }
    return $.ajax(ajax)
}
function jsonP(str,data,callback) {
    return $.ajax({
        url: str,
        dataType: 'jsonp',
        data:data,
        success(res) {
            callback(res)
        },
        error(err){
            console.log(err)
        }
    })
}

const token = {"X-Auth-Token":userToken}

module.exports = {
    //获取省市区
    getAllRegion(){
        var ajax = {};
        var str = config.ecs+"/api/get_region.php";
        return{
            execute(callback){
                // if(!window.localStorage){
                //     ajax = jsonP(str,{},callback)
                // }
                if(!localStorage["ohome_regions"]){
                    ajax = jsonP(str,{},res=>{
                        localStorage["ohome_regions"]=JSON.stringify(res)
                        callback(res)
                    })
                }else{
                    callback(JSON.parse(localStorage["ohome_regions"]))
                }
            },
            cancel(){
                ajax.abort()
            }
        }
    },
    //ecs获取全部分站
    getAllStatiion(){
        var ajax = {};
        var str = config.ecs+"/api/api_get_station.php";
        return{
            execute(callback){
                if(!_.getCookie("ohome_stations")){
                    ajax = get(str,{},res=>{
                        _.setCookie("ohome_stations",res)
                        callback(JSON.parse(res))
                    })
                }else{
                    callback(JSON.parse(_.getCookie("ohome_stations")))
                }
            },
            cancel(){
                ajax.abort()
            }
        }

    },
    //获取用户的中奖记录
    winningList(){
        var config = {
            contentType:"application/json",
            headers:token,
            dataType:"json"
        }
        return {
            execute(callback){
                post("/v1/activity/winningList",{},callback,config)
            }
        }
    },
    //列表页刷新
    winningRefresh(){
        var ajax = false;
        var config = {
            contentType:"application/json",
            headers:token,
            dataType:"json"
        }
        return {
            execute(data,callback){
                ajax = post("/v1/activity/winningRefresh",data,callback,config)
            },
            cancel(){
                ajax.abort()
            }
        }
    },
    //加载奖品列表
    winningLoad(){
        var ajax = false;
        var config = {
            contentType:"application/json",
            headers:token,
            dataType:"json"
        }
        return {
            execute(data,callback){
                ajax = post("/v1/activity/winningLoad",data,callback,config)
            },
            cancel(){
                if(!ajax) return
                ajax.abort();
            }
        }

    },
    winningDetail(){
        var config = {
            headers:token,
        }
        return {
            execute(key,callback){
                get("/v1/activity/winningDetail",{
                    cdkey:key
                },callback,config)
            }
        }
    },
    //获取用户抽奖次数
    drawNumber(){
        var config = {
            headers:token,
        }
        return {
            execute(id,callback){
                get("/v1/activity/drawNumber",{
                    activityId:id
                },callback,config)
            }
        }
    },
    //兑换中奖记录
    appendRecipient(){
        var ajax = false;
        var config = {
            contentType:"application/json",
            headers:token,
            dataType:"json"
        }
        return{
            execute(data,callback){
                ajax = post("/v1/activity/appendRecipient",data,callback,config)
            }
        }
    },
    prizeList(){
        var ajax = false;
        var config = {
            headers:token,
        }
        return{
            execute(id,callback){
                ajax = get("/v1/activity/prizeList",{
                    activityId:id
                },res=>{
                    callback(res)
                },config)
            }
        }
    },
    //增加用户抽奖次数
    incDrawNumber(){
        var ajax = false;
        var config = {
            contentType:"application/json",
            headers:token,
            dataType:"json"
        }
        return{
            execute(time,callback){
                ajax = post("/v1/activity/incDrawNumber",{
                    activityId:"1",
                    count:time
                },callback,config)
            }
        }
    },
    //抽奖
    draw(){
        var ajax = false;
        var config = {
            contentType:"application/x-www-form-urlencoded",
            headers:token,
            // dataType:"json"
        }
        return{
            execute(id,callback){
                ajax = post("/v1/activity/draw",{
                    activityId:id
                },callback,config)
            }
        }
    }

    //

}



