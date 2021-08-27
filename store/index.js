import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); //vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state: { //存放状态
		showPopup: false
	},
	mutations: {
		togglePopup(state, bool) {
			// 变更状态
			state.showPopup = bool
		}
	},
	actions: {
		togglePopupAction(context, payload) {
			context.commit('togglePopup', payload.bool)
		}
	}
})
export default store
