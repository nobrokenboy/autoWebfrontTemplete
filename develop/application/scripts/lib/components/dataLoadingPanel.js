module.exports = {
    template: `<div class="data-loading-panel" v-show="status">
        <div class="panel">
          <div class="bg"></div>
          <div class="content"><a v-show="btnClose!='hide'" class="close" @click="close"></a>
          <div class="spinner">
              <div class="dot1"></div>
              <div class="dot2"></div>
            </div>
          </div>
        </div>
      </div>`,
    props:["status","btnClose"],
    methods:{
        close(){
            this.$emit("close")
        }
    }
}