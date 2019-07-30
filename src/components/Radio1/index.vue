<template>
  <div class="radiogroup">
    <input class="radio1" type="radio" name="addr" id="yes" value="是" checked="checked" />
    <label for="yes">是</label>
    <input type="radio" name="addr" id="no" value="否" checked="checked" />
    <label for="no">否</label>
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
