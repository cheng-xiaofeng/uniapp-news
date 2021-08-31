<template>
	<view class="container">
		<view class="">
			<scroll-view style="height: 20px;white-space: nowrap;" scroll-x="true">
				<text id="demo1" class="scroll-view-item_H uni-bg-red">Arsseafasdf</text>
				
			</scroll-view>
		</view>
		<view class="content">
			<swiper class="swiper" style="height: 820px;overflow: auto;">
				<swiper-item>
					<view class="uni-list">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in news" :key="index"
							@tap="openinfo" :data-newsid="item.post_id">
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
	</view>
</template>
<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {

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
		}
	}
</script>

<style lang="less">
	.container {
		margin-top: 40px;
		height: auto;
	}
	.content {
		margin-top: -1px;
		height: auto;
		.swiper {
			width: 100%;
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
