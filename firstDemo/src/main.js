// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './router'
import store from './store'
import ajax from './config/ajax'
import './style/common'
import './config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
	routers
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
}).$mount('#app')
