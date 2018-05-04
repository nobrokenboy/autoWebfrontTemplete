module.exports = {
    template: `<div class="ui-modalbox">
    <transition name="fade"><div class="overlay" id="overlay" v-show="status"></div></transition>
        <div class="content" :class="{'active':status}">
            <div class="modal-header clearfix">
                <a class="close" @click="close">
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><path class="close-fill" d="M572.633359 511.999999 1009.831801 73.205942c15.956148-15.956148 15.956148-43.081598 0-60.633361s-43.081598-15.956148-60.633361 0L511.999999 451.366638 73.205942 14.168196c-15.956148-15.956148-43.081598-15.956148-60.633361 0s-15.956148 43.081598 0 60.633361L451.366638 511.999999 14.168196 950.794056c-15.956148 15.956148-15.956148 43.081598 0 60.633361s43.081598 15.956148 60.633361 0L511.999999 572.633359l438.794057 438.794057c15.956148 15.956148 43.081598 15.956148 60.633361 0s15.956148-43.081598 0-60.633361L572.633359 511.999999z"></path></svg>
                </a>
            </div>
           <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-foot">
                <slot name="foot"></slot>
            </div>
        </div>
</div>`,
    watch:{
        status(n,o){
            if(n==true){
                document.body.style.overflow="hidden";
                document.body.style.width="100%";
                document.body.style.height="100%";
                document.body.addEventListener("touchmove",this.bodyEvent);//防止body穿透点击

            }else{
                document.body.removeAttribute("style");
                document.body.style.width="auto";
                document.body.style.height="auto";
                document.body.removeEventListener("touchmove",this.bodyEvent);//备注要写成句柄
            }
        }
    },
    props:["status"],
    methods:{
        close(){
            this.$emit("close",!this.status)
        },
        bodyEvent(e){
            e.preventDefault();
        }
    }

}