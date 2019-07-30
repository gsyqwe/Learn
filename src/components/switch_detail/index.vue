<template >
  <div>
    <div class="bk">
      <div class="header">
        <div class="switch" id="switch">
          <a class="switch-btn-focus" id="J_basicinfo"  tabindex="7">基本信息</a>
          <a class="switch-btn" id="J_agendoutline"  tabindex="8">会议流程</a>
          <a class="switch-btn" id="J_noticeinfo"  tabindex="9">通知材料</a>
          <div class="switch-bottom" id="J_switch_bottom"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    import './index'
    export default {
        mounted(){
            document.querySelector('body').setAttribute('style', 'background-color:#f7f7f7')
        },
    }
</script>

<style scoped>
  @import './index.css';
</style>
