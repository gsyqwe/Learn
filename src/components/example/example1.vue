<template>
    <div>
      <div id="left">
        left
      </div>
      <div id="right">
        right
      </div>
      <div id="middle">
        <p>rwirwr</p>
        <br/>
        <p>rwirwr</p>
        <br/>
        <p>rwirwr</p>
        <br/>
        <p>rwirwr</p>
        <br/>
      </div>
    </div>
</template>
<script>
    export default {
        name: '',
        components: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style scoped>
  #left {
    float: left;
    width: 200px;
    background-color: red;
  }
  #right {
    float: right;
    width: 150px;
    background-color: green;
  }
  #middle {
    margin: 0px;
    background-color: silver;
  }
</style>
