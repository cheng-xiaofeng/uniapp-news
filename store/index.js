import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules/index.js'
Vue.use(Vuex); //vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state: { //存放状态
		userName: '不玩游戏的程序员',
	},
	mutations: {
		
	},
	actions: {
		
	},
	getters: {
		
	},
	modules
})
export default store
