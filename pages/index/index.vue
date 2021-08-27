<template>
	<view class="container">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
			<view class="left-icon">
				<u-circle-progress width="70" border-width="6" active-color="#e68f25" :percent="percent">
					<view class="u-progress-content">
						<u-image width="51rpx" height="51rpx" src="../../imgs/red-bag.png"></u-image>
					</view>
				</u-circle-progress>
			</view>
			<view class="search">
				<u-search placeholder="自动获得焦点" v-model="value" :input-style="{width:'70px'}" :show-action="false"
					bg-color="#fff" @search="search" />
			</view>
			<view class="right-btn" type="default" @tap="togglePopup(true)">
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
		<view>
			<u-popup v-model="showPopup" mode="bottom" class="popup">
				<view class="userInfo">
					<view>
						<u-avatar :style="{marginRight: '20rpx'}" @tap="goto" src="../../imgs/avatar.jpg" size="51">
						</u-avatar>
						<text class="words">{{userName}}</text>
					</view>
					<text class="words">草稿箱({{draftNumber}})</text>
				</view>
				<view class="tabs">
					<view class="tabs-list" v-for="(item,index) in tabList" :key="index" @tap="goto(item.url)">
						<u-image width="51rpx" height="51rpx" :src="item.img"></u-image>
						<text class="words">{{item.name}}</text>
					</view>
				</view>
				<view class="suggestion">
					<view class="container">
						<view class="suggest">
							<u-image width="32rpx" height="32rpx" src="../../static/bottomModal/crown.png"></u-image>
							<text class="words">加入创作者计划,发布作品赚现金</text>
							<u-icon name="arrow-right"></u-icon>
						</view>
						<u-icon name="close" size="20"></u-icon>
					</view>
				</view>
				<view class="creation">
					<view class="create">
						<text class="words">创作热点</text>
						<view class="right-info">
							<text class="sub-title">{{titleA}}</text>
							<u-icon name="arrow-right"></u-icon>
						</view>
					</view>
					<view class="create">
						<text class="words">创作活动</text>
						<view class="right-info">
							<text class="sub-title">{{titleB}}</text>
							<u-icon name="arrow-right"></u-icon>
						</view>
					</view>
				</view>
				<view class="closeBtn">
					<u-icon name="close" size="28" @tap="togglePopup(false)"></u-icon>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: [],
				value: '',
				percent: 0,
				showPopup: false,
				draftNumber: 0,
				userName: '用户名',
				tabList: [{
					img: '../../static/bottomModal/message.png',
					name: '微头条',
					url: ''
				}, {
					img: '../../static/bottomModal/article.png',
					name: '文章',
					url: ''
				}, {
					img: '../../static/bottomModal/q-a.png',
					name: '问答',
					url: ''
				}, {
					img: '../../static/bottomModal/video.png',
					name: '拍小视频',
					url: ''
				}],
				titleA: '#起底周江勇罗马按实际发动机撒放假啊司法局',
				titleB: '参与活动,赢取奖励'
			};
		},
		onLoad: function() {
			uni.showLoading({
				title: "加载中...."
			})
			this.getData()
			this.circleInterval = setInterval(() => {
				if (this.percent == 100) {
					this.percent = 0
				}
				this.percent += 1
			}, 500)
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

			},
			togglePopup(bool) {
				this.showPopup = bool
			},
			goto(url) {
				uni.navigateTo({
					url
				});
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

			.search {
				width: 75%;
			}

			.left-icon {
				height: 35px;
				width: 35px;
				border-radius: 50%;
				background-color: #fff;
				align-items: center;
				justify-content: center;

				.u-circle-progress {
					border-radius: 50%;
				}

			}

			.right-btn {
				height: 35px;
				width: 7%;
				display: flex;
				flex-direction: column;
				align-items: center;

				.circle {
					width: 70%;
					height: 100%;
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

	/deep/.popup .u-drawer-content {
		padding: 10px 30px 0 30px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;

		.words {
			font-weight: bold;
			font-family: 'qingyuan';
		}

		.userInfo {
			height: 50px;
			justify-content: space-between;
		}

		.tabs {
			justify-content: space-between;

			.tabs-list {
				width: 25%;
				justify-content: center;
				align-items: center;
				flex-direction: column;
			}
		}

		.suggestion {
			height: 90px;
			align-items: center;

			.container {
				height: 50%;
				width: 100%;
				padding-left: 20px;
				padding-right: 20px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color: #fdfbee;
				border-radius: 5px;

				.suggest {
					width: 80%;
				}
			}
		}

		.creation {
			display: block;
			width: 100%;

			.create {
				width: 100%;
				height: 50px;
				display: block;
				.right-info {
					width: 50%;
					float: right;
					color: rgb(144, 147, 153);

					.sub-title {
						width: 90%;
						text-align: right;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-right: 5px;
					}
				}
			}
		}

		.closeBtn {
			justify-content: center;
			margin-bottom: 30px;
		}
	}
</style>
