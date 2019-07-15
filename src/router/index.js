import Vue from 'vue'
import Router from 'vue-router'
import learn from '@/components/Try_Form_Creator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"/",
      component:learn
    }
  ]
})
