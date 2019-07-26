<template>
  <div class="grid-container outline">
    <div class="row">
      <div class="col-1"><p>col-1</p></div>
      <div class="col-1"><p>col-1</p></div>
      <div class="col-1"><p>col-1</p></div>
      <div class="col-1"><p>col-1</p></div>
      <div class="col-1"><p>col-1</p></div>
      <div class="col-1"><p>col-1</p></div>
    </div>
    <div class="row">
      <div class="col-2"><p>col-2</p></div>
      <div class="col-2"><p>col-2</p></div>
      <div class="col-2"><p>col-2</p></div>
    </div>
    <div class="row">
      <div class="col-3"><p>col-3</p></div>
      <div class="col-3"><p>col-3</p></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "example5"
    }
</script>

<style scoped>
  .grid-container{
    width: 100%;
    max-width: 1200px;
  }

  /*-- 使用 cleafix 清除浮动 -- */
  .row:before,
  .row:after {
    content:"";
    display: table ;
    clear:both;
  }

  [class*='col-'] {
    float: left;
    min-height: 1px;
    width: 16.66%;
    /*-- 设置列的左右间隙 -- */
    padding: 12px;
    background-color: #FFDCDC;
  }

  .col-1{ width: 16.66%; }
  .col-2{ width: 33.33%; }
  .col-3{ width: 50%;    }
  .col-4{ width: 66.66%; }
  .col-5{ width: 83.33%; }
  .col-6{ width: 100%;   }

  .outline, .outline *{
    outline: 1px solid #F6A1A1;
  }

  /*-- 列的额外内容样式 --*/
  [class*='col-'] > p {
    background-color: #FFC2C2;
    padding: 0;
    margin: 0;
    text-align: center;
    color: white;
  }
</style>
