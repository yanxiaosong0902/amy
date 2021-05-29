/**
 * @FilePath: /amy/src/store/index.js
 * @description: 
 * @author: yanxiaosong@qiniu.com
 * @Date: 2021-05-28 12:58:23
 * @LastEditors: your name
 * @LastEditTime: 2021-05-28 13:27:33
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 'yanxiaosong'
  },
  mutations: {
    SET_USER_NAME(state, playload) {
      state.name = playload
    }
  },
  actions: {
    async getName(context, data = 'test') {
      function apiGet() {
        return setTimeout(() => {
          return data
        }, 1000)  
      }
      const name = await apiGet()
      console.log(name)
      context.commit('SET_USER_NAME', name)
    }
  }
})

export default store