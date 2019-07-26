<style>
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>

<template>
  <div>
    <v-chart :options="polar"/>
    <v-chart :options="annual" id="mychart" @click="clickDetail" />
  </div>
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts'
  import 'echarts/lib/chart/pie'
  import 'echarts/lib/component/title'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/legend'
  export default {
    components: {
      'v-chart': ECharts
    },
    data () {
      return {
        //基本饼图设计
        polar: {
          //设计echarts的标题
          title : {
            text: '会员数据统计',
            subtext: '动态数据',
            x:'center'
          },
          //移动后显示的数据
          tooltip : {
            show:true,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          //左上角的提示盒
          legend: {
            show: true,
            orient: 'vertical',
            left: 'left',
            data: ['微信访问','公众号访问','扫码进入','分享进入','搜索访问']
          },
          //具体数据与显示
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:335, name:'微信访问'},
                {value:310, name:'公众号访问'},
                {value:234, name:'扫码进入'},
                {value:135, name:'分享进入'},
                {value:1548, name:'搜索访问'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        //环形图设计
        annual: {
          title : {
            text: '会员数据统计',
            subtext: '动态数据',
            x:'center'
          },
          //环形颜色
          color: ['#ffb616', '#ccc'],
          legend: {
            orient: 'vertical',
            show: true,//左上角的提示盒子
            x: 'left',
            data: ['视频广告', '其他']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              hoverAnimation: false,//是否会有移动显示的效果
              radius: ['20%', '40%'],
              labelLine: {
                normal: {
                  length: 20,
                  length2: 70,
                }
              },
              label: {
                normal: {
                  // \n\n可让文字居于牵引线上方，很关键
                  //  {b}  代表显示的内容标题
                  // {c}代表数据
                  formatter: ' {c} \n\n {b}',
                  borderWidth: 30,
                  borderRadius: 4,
                  padding: [0, -70],
                }
              },
              data: [{
                value: 8,
                name: '视频广告'
              }, {
                value: 35,
                name: '其他'
              }]
            }
          ]
        }
      }
    },
    methods:{
      clickDetail(a){

      }
    },
    mounted() {

    }
  }
</script>
