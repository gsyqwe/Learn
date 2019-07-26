<template>
  <div style="display: table">
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
        name: "example4",
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
                middle:"middle55555",
                right:"right"
            }
        }
    }
</script>

<style scoped>
  .left{
    display: table-cell;
    width: 150px;
    background-color: red;
  }
  .middle{
    display: table-cell;
    background-color: silver;
  }
  .right{
    display: table-cell;
    width: 200px;
    background-color: green;
  }
</style>
