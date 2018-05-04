module.exports = {
    template: `<div class="ui-drop-box">
    <div class="tc">
        <p></p>
        <i class="icon-loading" :class="{'hide':showIcon}"></i>
        <p v-show="showText">释放刷新</p>
    </div>
    <div class="drop-panel"><slot></slot></div>
    <div class="loading-spinner" v-show="!rollFlag">
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
    </div>
</div>`,
    props:["rollFlag"],
    data(){
        return {
            showText:false,
            showIcon:true,
        }
    },
    mounted(){
        var panel = $(this.$el).find(".drop-panel");
        var load = $(this.$el).find(".icon-loading");
        var _window = $(window);
        var _body = $("body");
        var flag = false,touchY=0,currentY=0,moveTime=0;
        panel.bind("touchstart",e=>{
            this.showIcon = false;
            if((document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop)==0){
                flag = true;
            }
            touchY = e.touches[0].screenY;
        })
        panel.bind("touchmove",e=>{
            if(flag){
                if(moveTime==0&&e.touches[0].screenY-touchY<0){
                    return
                }
                e.preventDefault()
                currentY = currentY + e.touches[0].screenY-touchY;
                if(currentY<=0){
                    moveTime--;
                    return
                }
                moveTime++;
                load.css("transform","rotate("+currentY+"deg)");
                load.css("webkitTransform","rotate("+currentY+"deg)");
                panel.css("transform","translateY("+currentY+"px)");
                panel.css("webkitTransform","translateY("+currentY+"px)");
                touchY = e.touches[0].screenY;
                if(currentY>=150){
                    this.showText = true;
                }else {
                    this.showText = false;
                }
            }


        })
        panel.bind("touchend",e=>{
            if(flag){
                flag = false;
                if(this.showText){
                    this.$emit("pull")
                }
                currentY = 0;
                moveTime = 0;
                this.showText = false;
                panel.addClass("reset")
                load.css("transform","rotate("+currentY+"deg)");
                load.css("webkitTransform","rotate("+currentY+"deg)");
                panel.css("transform","translateY("+currentY+"px)");
                panel.css("webkitTransform","translateY("+currentY+"px)");
                setTimeout(e=>{
                    this.showIcon = true;
                    panel.removeClass("reset")
                },300)
            }
            //判断是否在最底部，加载更多
            if((_body.get(0).scrollHeight - _window.height() - _window.scrollTop())<=10 && !this.rollFlag) {
                this.$emit("roll")
            }


        })



    }
}