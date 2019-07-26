<template>
  <div style="position: absolute;width:100%;height:100%;top:0;left:0">
    <div class="left">
      {{left|ellipsis}}
    </div>
    <div class="middle">
      <p>rwirwr</p>
      <br/>
      <p>rwirwr</p>
      <br/>
      <p>rwirwr</p>
      <br/>
      <p>rwirwr</p>
      <br/>
    </div>
    <div class="right">
      {{right|ellipsis}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "example3",
        // filters:{
        //     ellipsis (value) {
        //         if (!value) return ''
        //         if (value.length > 14) {
        //             return value.slice(0,14) + '...'
        //         }
        //         return value
        //     }
        // },
        data(){
            return{
                left:"left",
                middle:"middle",
                right:"right"
            }
        }
    }
</script>

<style scoped>
  .left{
    position: absolute;
    left:0;
    top:0;
    width: 200px;
    background-color: red;
  }
  .middle{
    margin: 0 150px 0 200px;
    background-color: silver;
  }
  .right{
    position: absolute;
    right:0px;
    top:0;
    width:150px;
    background-color: green;
  }
</style>
