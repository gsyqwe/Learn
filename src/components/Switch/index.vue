<template>
  <div class="gsy-div" @click.stop="toggle">
    <span class="gsy-switch" :class="{'gsy-switch-on' : flag}" :value="value" ></span>
    <div v-if='!flag' class="gsy-div-2">未处理</div>
    <div v-if='flag' class="gsy-div-1">已处理</div>
  </div>
</template>

<script>
    export default {
        name:"Gswitch",
        props: {
            value: {
                type: Boolean,
                default: true
            },
            handle: {
                type: Boolean,
                default: true
            },
        },
        data() {
            return {
                flag: this.value
            }
        },
        watch: {
            value(){
                this.flag = this.value;
            }
        },
        methods: {
            toggle() {
                // 是否可点击
                if(this.handle === true){
                    this.flag = !this.flag;
                    this.$emit('changeSwitch', this.flag);
                }
            }
        }
    }
</script>

<style scoped>
  @import 'index.css';
</style>
