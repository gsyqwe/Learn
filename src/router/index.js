import Vue from 'vue'
import Router from 'vue-router'
import learn from '@/components/Try_Form_Creator'
import testvalidate from '@/components/Try_Validator'
import tryecharts from '@/components/Try_Echarts'
import tryswitch from '@/components/Try_Switch'
import example1 from '@/components/example/example1'
import example2 from '@/components/example/example2'
import example3 from '@/components/example/example3'
import example4 from "../components/example/example4";
import example5 from "../components/example/example5";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/example5",
      name:"example5",
      component:example5
    },
    {
      path:"/example4",
      name:"example4",
      component:example4
    },
    {
      path:"/tryswitch",
      name:"tryswitch",
      component:tryswitch
    },
    {
      path:"/example3",
      name:"example3",
      component:example3
    },
    {
      path:"/example2",
      name:"example2",
      component:example2
    },
    {
      path:"/example1",
      name:"example1",
      component:example1
    },
    {
      path:"/",
      name:"/",
      component:learn
    },
    {
      path:"/testecharts",
      name:"testecharts",
      component:tryecharts
    },
    {
      path:"/test",
      name:"test",
      component:testvalidate
    }
  ]
})
