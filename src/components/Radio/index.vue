<template>
  <div class="address">
    <input type="radio" name="addr" id="addr1" value="Beijing" checked="checked" />
    <label for="addr1">BEIJING</label><br />
    <input type="radio" name="addr" id="addr2" value="Harbin" />
    <label for="addr2">HARBIN</label><br />
    <input type="radio" name="addr" id="addr3" value="Qingdao" />
    <label for="addr3">QINGDAO</label><br />
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
@import "index.css";
</style>
