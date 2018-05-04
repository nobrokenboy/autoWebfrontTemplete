//
import Dialog from "../components/dialog/index";

var userAgent = navigator.userAgent.toLowerCase()
//如果是火狐
if(userAgent.includes("firefox")){
    window.onload = function () {
        _.forEach(document.querySelectorAll(".bud-table"),table=>{
            if(_.hasClass(table,"flex")){
                table.querySelector("thead").style.borderRightWidth = "35px"
            }
        })

    }
}


