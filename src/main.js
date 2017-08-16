// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerMap from './router/router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)
const router = new VueRouter({ routes: routerMap })
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
