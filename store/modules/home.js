import Vue from 'vue'
import Vuex from 'vuex'
import {getHomeNewsList} from '../../utils/request/home.js'
Vue.use(Vuex); //vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	namespace: 'home',
	state: { //存放状态
		showPopup: false,
		news: []
	},
	mutations: {
		getHomeNewsList(state, news) {
			// 变更状态
			state.news = news
		},
		togglePopup(state, bool) {
			// 变更状态
			state.showPopup = bool
		}
	},
	actions: {
		getHomeNewsListAction(context, payload) {
			getHomeNewsList(payload).then(res => {
				context.commit('getHomeNewsList', res.data)
				uni.hideLoading();
			})
		},
		togglePopupAction(context, payload) {
			context.commit('togglePopup', payload.bool)
		}
	}
})
export default store
