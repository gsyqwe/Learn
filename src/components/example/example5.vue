<template>
  <Row class="row">
    <Col class="left" span="11">left</Col>
    <Col class="middle" span="12"><p>rwirwr</p>
      <br/>
      <p>rwirwr</p>
      <br/>
      <p>rwirwr</p>
      <br/>
      <p>rwirwr</p>
      <br/></Col>
    <Col class="right" span="13">right</Col>
  </Row>
</template>
<script>
    export default {

    }
</script>
<style scoped>
  .row{
    width:100%;
  }
  .left{
    width: 150px;
    background-color: red;
  }
  .middle{
    width:auto;
    background-color: silver;
  }
  .right{
    width: 200px;
    background-color: green;
  }
</style>
