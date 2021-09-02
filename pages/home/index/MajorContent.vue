<template>
	<view class="container">
		<view class="topscrollbar">
			<scroll-view :scroll-into-view="topbarItemId" style="width: 95%;height: 20px;white-space: nowrap;" scroll-x="true">
				<u-button :class="topbarItemId == item.id?'activeItem' : ''" :custom-style="customStyle" size="mini" :hair-line="false" plain
					v-for="(item, index) in scrollbarItems" :key="index" @tap="topbartap(item.id)"> {{item.name}}</u-button>
			</scroll-view>
			<view class="more-items">
				<u-icon name="list" @tap="togglePopup(true)"></u-icon>
			</view>
		</view>
		<view class="content">
			<swiper class="swiper" style="height: 820px;overflow: auto;">
				<swiper-item>
					<view class="uni-list">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in news"
							:key="index" @tap="openinfo" :data-newsid="item.post_id">
							<view class="uni-media-list">
								<image class="uni-media-list-logo" :src="item.author_avatar"></image>
								<view class="uni-media-list-body">
									<view class="uni-media-list-text-top">{{item.title}}</view>
									<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
								</view>
							</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		<topbar-edit-modal @toggle-popup="togglePopup" :visible="visible" :scrollbarItems="scrollbarItems" :allItems="allItems"/>
	</view>
</template>
<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	import TopbarEditModal from './TopbarEditModal.vue'
	export default {
		components: {
			TopbarEditModal
		},
		data() {
			return {
				visible: false,
				customStyle: {
					border: 'none'
				},
				topbarItemId: 'u1',
				scrollbarItems: [{
					name: '关注',
					id: 'u0'
				}, {
					name: '推荐',
					id: 'u1'
				}, {
					name: '重庆',
					id: 'u2'
				}, {
					name: '图片',
					id: 'u3'
				}, {
					name: '科技',
					id: 'u4'
				}, {
					name: '国际',
					id: 'u5'
				}, {
					name: '健康',
					id: 'u6'
				}, {
					name: '历史',
					id: 'u7'
				}, {
					name: '热点',
					id: 'u8'
				}, {
					name: '政法',
					id: 'u9'
				}],
				allItems: [{
					name: '免费小说',
					id: 'u10'
				}, {
					name: '热榜',
					id: 'u11'
				}, {
					name: '抗疫',
					id: 'u12'
				}, {
					name: '幸福里',
					id: 'u13'
				}, {
					name: '精品课',
					id: 'u14'
				}, {
					name: '漫画',
					id: 'u15'
				}, {
					name: '值点',
					id: 'u16'
				}, {
					name: '问答',
					id: 'u17'
				}, {
					name: '直播',
					id: 'u18'
				}, {
					name: '影视剧',
					id: 'u19'
				}, {
					name: '音频',
					id: 'u20'
				}, {
					name: '游戏',
					id: 'u21'
				}, {
					name: '数码',
					id: 'u22'
				}, {
					name: '手机',
					id: 'u23'
				}, {
					name: 'NBA',
					id: 'u24'
				}, {
					name: '音乐',
					id: 'u25'
				}, {
					name: '星座',
					id: 'u26'
				}, {
					name: '情感',
					id: 'u27'
				}, {
					name: '股票',
					id: 'u28'
				}, {
					name: '影视',
					id: 'u29'
				}, {
					name: '彩票',
					id: 'u30'
				}, {
					name: '乒乓',
					id: 'u31'
				}, {
					name: '搞笑',
					id: 'u32'
				}, {
					name: '视频',
					id: 'u33'
				}, {
					name: '娱乐',
					id: 'u34'
				}, {
					name: '小视频',
					id: 'u35'
				}, {
					name: '懂车帝',
					id: 'u36'
				}, {
					name: '体育',
					id: 'u37'
				}, {
					name: '财经',
					id: 'u38'
				}, {
					name: '军事',
					id: 'u39'
				}, {
					name: '育儿',
					id: 'u40'
				}, {
					name: '美食',
					id: 'u41'
				}, {
					name: '养生',
					id: 'u42'
				}, {
					name: '旅游',
					id: 'u43'
				}, {
					name: '家具',
					id: 'u44'
				}, {
					name: '教育',
					id: 'u45'
				}, {
					name: '三农',
					id: 'u46'
				}, {
					name: '古事',
					id: 'u47'
				}]
			}
		},
		mounted() {
			uni.showLoading({
				title: "加载中...."
			})
			this.getData()
		},
		computed: {
			...mapState('home', {
				news: state => state.news
			}),
		},
		methods: {
			...mapActions('home', ['getHomeNewsListAction']),
			getData(params) {
				this.getHomeNewsListAction({
					params
				})
			},
			openinfo(e) {
				var newsid = e.currentTarget.dataset.newsid;
				uni.navigateTo({
					url: '../info/info?newsid=' + newsid
				});
			},
			togglePopup(bool) {
				this.visible = bool
			},
			topbartap(id) {
				this.topbarItemId = id
			}
		}
	}
</script>

<style lang="less">
	.container {
		margin-top: 40px;
		height: auto;

		.topscrollbar {
			display: flex;
			.more-items {
				z-index: 9999;
				box-shadow: -5px 0px 5px #fff;
				/deep/.u-icon__icon {
					top: 2px !important;
				}
			}
			.activeItem {
				color: #ff656f;
			}
		}
	}

	.content {
		margin-top: -1px;
		height: auto;

		.swiper {
			width: 0%;
			height: auto;

			.uni-list {
				.uni-media-list-body {
					height: auto;

					.uni-media-list-text-top {
						line-height: 1.6em;
					}
				}
			}
		}
	}
</style>
