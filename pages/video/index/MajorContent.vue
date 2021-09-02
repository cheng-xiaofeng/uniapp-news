<template>
	<view class="container">
		<view class="topscrollbar">
			<scroll-view :scroll-into-view="topbarItemId" style="width: 95%;height: 20px;white-space: nowrap;"
				scroll-x="true">
				<u-button :class="topbarItemId == item.id?'activeItem' : ''" :custom-style="customStyle" size="mini"
					:hair-line="false" plain v-for="(item, index) in scrollbarItems" :key="index"
					@tap="topbartap(item.id)"> {{item.name}}</u-button>
			</scroll-view>
		</view>
		<view class="content">
			<swiper class="swiper" style="height: 820px;overflow: auto;">
				<swiper-item>
					<view class="uni-list">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover">
							<view class="uni-media-list">
								<view class="uni-media-list-body">
									<view class="uni-media-list-text-top"></view>
									<view class="uni-media-list-text-bottom uni-ellipsis"></view>
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
	export default {
		data() {
			return {
				topbarItemId: 'v1',
				customStyle: {
					border: 'none'
				},
				scrollbarItems: [{
					name: '推荐',
					id: 'v1'
				}, {
					name: '直播',
					id: 'v2'
				}, {
					name: '放映厅',
					id: 'v3'
				}, {
					name: '音乐',
					id: 'v4'
				}, {
					name: '影视',
					id: 'v5'
				}, {
					name: '农人',
					id: 'v6'
				}, {
					name: '游戏',
					id: 'v7'
				}, {
					name: '美食',
					id: 'v8'
				}, {
					name: '体育',
					id: 'v9'
				}]
			}
		},
		methods: {
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
</style>
