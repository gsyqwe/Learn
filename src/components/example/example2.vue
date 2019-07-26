<template>
    <div style="display: flex;flex-direction: row;flex-wrap: wrap">
      <div class="left">
        left
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
        right
      </div>
    </div>
</template>

<script>
    export default {
        name: "example2"
    }
</script>

<style scoped>
  .left{
    width: 200px;
    background-color: red;
    flex: 0 0 auto;
  }
  .middle{
    flex: 1 1 auto;
    background-color: silver;
  }
  .right{
    width:150px;
    flex: 0 0 auto;
    background-color: green;
  }
</style>
