/**
 * @FilePath: /amy/src/main.js
 * @description: 
 * @author: yanxiaosong@qiniu.com
 * @Date: 2021-05-28 12:51:18
 * @LastEditors: your name
 * @LastEditTime: 2021-05-28 14:36:53
 */
import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
