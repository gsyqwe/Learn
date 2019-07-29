<template >
  <div style="position: absolute;top:6vh;height:5vh;">
      <div class="header">
        <div class="switch" id="switch">
          <a style="position: absolute;left:0vw;width:33vw;top:-2vh;" class="switch_btn_focus" id="BasicInfo"  tabindex="7">基本信息</a>
          <a style="position: absolute;left:33vw;width: 33vw;top:-2vh;" class="switch_btn" id="FeedBackInfo"  tabindex="8">反馈信息</a>
          <a style="position: absolute;left:66vw;width: 33vw;top:-2vh;" class="switch_btn" id="VoteInfo"  tabindex="9">会议表决</a>
          <div class="switch_bottom" id="switch_bottom" style="position: absolute; width: 33vw; left: 0px;"></div>
        </div>
      </div>
    </div>
</template>

<script>
  import { jq } from '../../js/jquery-1.9.0.min'
  import { login } from '../../js/login'
  export default {
    name: "login",
    data(){
      return{

      }
    },
    methods:{

    },
  }
</script>

<style scoped>
  a {
    text-decoration:none;
  }
  a:hover {
    text-decoration:none;color:#f00;
  }
  .header {
    height:5vh;
    border-bottom:1px solid #e2e2e2;
    position:relative;
    font-family:"Microsoft Yahei";
  }
  .header .switch {
    height:5vh;
    position:absolute;
    left:0vw;
    bottom:0;
    font-size:16px;
  }
  .header .switch #switch_qlogin {
    width:33vw;
  }
  .header .switch .switch_btn {
    color:black;
    display:inline-block;
    height:5vh;
    line-height:5vh;
    outline:none;
    *hide-focus:expression(this.hideFocus=true);
  }
  .header .switch .switch_btn_focus {
    color:dodgerblue;
    display:inline-block;
    height:5vh;
    line-height:5vh;
    outline:none;
    *hide-focus:expression(this.hideFocus=true);
  }
  .header .switch .switch_btn:hover {
    color:dodgerblue;
    text-decoration:none;
  }
  .header .switch .switch_btn_focus:hover {
    text-decoration:none;
  }
  #switch_bottom {
    position:absolute;
    bottom:-1px;_bottom:-2px;
    border-bottom:2px solid dodgerblue;
  }
</style>
