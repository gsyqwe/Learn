import Vue from 'vue'
import Router from 'vue-router'
import learn from '@/components/Try_Form_Creator'
import testvalidate from '@/components/Try_Validator'
import tryecharts from '@/components/Try_Echarts'
import example1 from '@/components/example/example1'
import example2 from '@/components/example/example2'
import example3 from '@/components/example/example3'
import example4 from "../components/example/example4";
import example5 from "../components/example/example5";
import switchtab2 from '../components/switch_detail/index.vue'
import personswitch from '../components/Switch/index'
import radios from '../components/Radio/index'
import radio1 from '../components/Radio1/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/radio1",
      name:"radio1",
      component:radio1
    },
    {
     path:"/radio",
     name:"radio",
     component:radios
    },
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
    },
    {
      path:"/switchtab2",
      name:"switchtab2",
      component:switchtab2
    },
    {
      path:"/personswitch",
      name:"personswitch",
      component:personswitch
    }
  ]
})
