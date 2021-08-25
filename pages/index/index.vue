<template>
	<view class="container">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
			<view class="left-icon" />
			<u-search placeholder="自动获得焦点" v-model="value" input-style="{width: 70px}" :show-action="false"
				bg-color="#fff" @search="search"/>
			<view class="right-btn" type="default">
				<view class="circle">
					<u-icon name="plus" color="#d33d3e" size="12"></u-icon>
				</view>
				<text class="release">发布</text>
			</view>
		</view>
		<view class="content">
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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: [],
				value: ''
			};
		},
		onLoad: function() {
			uni.showLoading({
				title: "加载中...."
			})
			this.getData()
		},
		methods: {
			getData(params) {
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news',
					method: 'GET',
					data: {},
					params,
					success: res => {
						this.news = res.data;
						uni.hideLoading();
					},
					fail: () => {},
					complete: () => {}
				});
			},
			openinfo(e) {
				var newsid = e.currentTarget.dataset.newsid;
				uni.navigateTo({
					url: '../info/info?newsid=' + newsid
				});
			},
			search(e) {
				
			}
		},
	}
</script>

<style lang="less">
	.container {
		display: block;
		width: 100%;

		.status_bar {
			width: 100%;
			height: 40px;
			position: fixed;
			z-index: 9999;
			display: flex;
			justify-content: space-around;
			align-items: center;
			background-color: #d33d3e;

			.left-icon {
				height: 35px;
				width: 35px;
				border-radius: 50%;
				background-color: #fff;
			}

			.right-btn {
				height: 35px;
				width: 10%;
				display: flex;
				flex-direction: column;

				.circle {
					width: 50%;
					height: 60%;
					border-radius: 50%;
					background-color: #fff;
					color: #d33d3e;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 14px;
				}

				.release {
					font-size: 12px;
					color: #fff;
				}
			}
		}

		.content {
			margin-top: 48px;

			.uni-media-list-body {
				height: auto;
			}

			.uni-media-list-text-top {
				line-height: 1.6em;
			}
		}
	}
</style>
