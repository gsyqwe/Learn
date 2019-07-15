<template>
  <form-create :rule="rule">
  </form-create>
</template>
<script>
    export default {
      name:'',
      data(){
        return{
          rule: [//生成radio单选框
            {
            type: "radio",
            title: "是否包邮1",
            field: "is_postage1",
            value: "0",
            options: [{
              value: "0",
              label: "不包邮",
            },
              {
                value: "1",
                label: "包邮",
              },
            ],
          },{//生成自动完成输入框
            type: "autoComplete",
            title: "自动完成",
            field: "auto2",
            value: "xaboy",
            style:{
              passive:false,
              border: "1px solid black",
            },
            props: {
              data: [
                'xaboy',
                'xian',
                'github'
              ],
              passive:false,
              filterMethod: (value, option) => {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1
              }
            }
          }, {//生成input框
            type: "input",
            title: "商品名称2",
              id:"goods_name2",
            field: "goods_name2",
            value: "iphone 7",
            props: {
              "type": "text",
              "placeholder": "请输入商品名称",
              "rows":5
            }, //输入validate规则
            validate: [{
              required: true,
              message: '请输入商品名称',
              trigger: 'blur'
            },{
              pattern:/^[a-z-A-Z\u4e00-\u9fa5]+$/,
              message:"输入汉字",
              trigger:"blur"
            }
            ],
          }, {//生成多选框并生成选择值,value代表已选的值
              type: "checkbox",
              title: "标签2",
              field: "label2",
              value: [""],
              options: [{
                value: "1",
                label: "好用",
                disabled: false
              },
                {
                  value: "2",
                  label: "方便",
                  disabled: false
                },
                {
                  value: "3",
                  label: "实用",
                  disabled: false
                },
                {
                  value: "4",
                  label: "有效",
                  disabled: false
                },
              ],
            },{//多级联动创建
              type: "cascader",
              title: "所在区域",
              field: "address2",
              value: ['陕西省', '西安市', '新城区'],
              props: {
                //可选项的数据源，输入这个数据源
                data: window.province_city_area,
              },
            },
            {//上传组件
              type: "upload",
              field: "pic2",
              title: "轮播图2",
              value: ['http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg', 'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg'],
              props: {
                "type": "select",
                "uploadType": "image",
                "action": "/upload.php",//上传地址
                "name": "pic",
                "multiple": true,
                "accept": "image\/*",
                "format": ["jpg", "jpeg", "png", "gif"],
                "maxSize": 2048,
                "maxLength": 5,
                "onSuccess": function(res) {//成功后调用的方法
                  return 'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg';
                },
              },
              validate:[{//设定图片的一些需求
                required: true,
                type: 'array',
                min: 3,
                message: '请上传3张图片',
                trigger: 'change'//在改变的时候进行检查
              },],
            },
            {//switch组件生成
              type:"switch",
              title:"是否上架",
              field:"is_show",
              value:"1",
              props: {
                "size":"large",
                "trueValue":"1",
                "falseValue":"0",
                "slot": {
                  open:"上架",
                  close:"下架",
                },
              },
            },
          ],//结束
          test:[],
        }
      },
      methods:{
      },
      mounted(){
        var self = this
        var validate = {//生成一个select
          type: "select",
          field: "cate_id2",
          title: "产品分类2",
          value: ["104", "105"],
          options: [{
            "value": "104",
            "label": "生态蔬菜",
            "disabled": false
          },
            {
              "value": "105",
              "label": "新鲜水果",
              "disabled": false
            },
          ],
          props: {
            "placement": "bottom",
          }
        }
        this.rule.push(validate)
        validate = {//生成一个input的textarea
          type: "input",
          title: "商品名称2",
          field: "goods_name3",
          value: "iphone 7",
          props: {
            "type": "textarea",
            "placeholder": "请输入商品名称",
            "rows":5
          },
          validate: [{
            required: true
          },
          ],
        }
        this.rule.push(validate)
      }
    }
</script>
<style scoped>
  *{
   touch-action: pan-y;
  }
</style>
