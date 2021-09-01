
import {getHomeNewsList} from '../../utils/request/home.js'


//Vuex.Store 构造器选项
const home = {
	namespaced: true,
	state: { //存放状态
		showPopup: false,
		news: []
	},
	getters:{
		
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
			getHomeNewsList(payload).then(data => {
				const [error, res]  = data;
				context.commit('getHomeNewsList', res.data)
				uni.hideLoading();
			})
		},
		togglePopupAction(context, payload) {
			context.commit('togglePopup', payload.bool)
		}
	}
}
export default home
