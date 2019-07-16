import Vue from 'vue'
import Router from 'vue-router'
import learn from '@/components/Try_Form_Creator'
import testvalidate from '@/components/Try_Validator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"/",
      component:learn
    },
    {
      path:"/test",
      name:"test",
      component:testvalidate
    }
  ]
})
