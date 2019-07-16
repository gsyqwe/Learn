<template>
  <div>
    <!--测试给input框加测试事件-->
    <div>
      <input placeholder="最多输入七个字" maxlength="7" v-model="testinput" @blur="validate">
      <span v-if="error">{{errorText}}</span>
    </div>
    <!--使用Form与FormItem进行测试-->
    <div>
      <Form ref="TestForm" :model="TestForm" :rules="TestRules" :label-width="150">
        <FormItem label="用户名" prop="TestId" style="position: absolute;width: 300px;left:-50px;top:100px;">
          <i-input type="text" v-model="TestForm.TestId" style="width: 250px"/>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
    export default {
      name: "",
      data(){
        //使用i-input框进行验证
        const TestValidate = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户名'));
          }
          else {
            callback();
          }
        };
        return{
          //测试给单独输入框加测试的数据
          error:false,
          errorText:'',
          testinput:"",
          //使用Form进行验证测试,加上i-input方式的验证方法
          TestForm:{
            TestId:"",
          },
          TestRules:{
            TestId:[
              {validator:TestValidate,trigger:'blur'}
            ]
          }
        }
      },
      methods:{
        //测试输入框的测试事件
        validate: function() {
          if(this.testinput ===''){
            this.error=true;
            this.errorText="请输入";
            this.isdisabled=true;
            return false;
          }else{
            this.error=false
            this.errorText=""
          }
        },
      }
    }
</script>

<style scoped>

</style>
