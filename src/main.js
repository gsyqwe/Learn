// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Validator from 'vue-validator'
import formCreator from 'form-create'
import 'iview/dist/styles/iview.css';
import iView from 'iview'

Vue.use(iView)
Vue.use(Validator)
Vue.use(formCreator)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
