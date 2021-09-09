<template>
	<view class="detail-container">
		<view class="top-background">
			<u-button type="error" size="mini" :custom-style="customStyle">设置背景</u-button>
		</view>
		<view class="infobody">
			<view class="header">
				<view class="user-avatar">
					<u-avatar size="large" src="https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg">
					</u-avatar>
				</view>
				<view class="btns">
					<u-button size="mini" :custom-style="editStyle">编辑资料</u-button>
					<u-button type="error" size="mini">我的认证</u-button>
				</view>
			</view>
			<view class="userinfo">
				<view class="usernameinfo">
					<h2>{{userName}}</h2>
					<view class="gender">
						<u-image width="30rpx" height="30rpx" src="../../../imgs/male.png"></u-image><text>男</text>
					</view>
				</view>
				<view class="otherinfo">
					<view class="">
						<h4>272</h4><text>头条</text>
					</view>
					<view class="">
						<h4>2.8万</h4><text>获赞</text>
					</view>
					<view class="">
						<h4>54</h4><text>粉丝</text>
					</view>
					<view class="">
						<h4>20</h4><text>关注</text>
					</view>
				</view>
				<view class="frontend">
					认证: 前端工程师
				</view>
				<view class="desc">
					健身 看书 身体和灵魂都在路上
				</view>
			</view>
			<view class="Infotabs">
				<u-tabs :list="list" gutter="50" bar-width="50" :current="current" @change="change"></u-tabs>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				customStyle: {
					position: "realative",
					top: "70%",
					left: "40%"
				},
				editStyle: {
					marginRight: '10px'
				},
				list: [{
					name: '全部'
				}, {
					name: '微头条'
				}, {
					name: '问答',
				}, {
					name: '小视频'
				}],
				current: 0
			}
		},
		onLoad: function(e) {

		},
		computed: {
			...mapState(['userName'])
		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="less" scoped>
	.detail-container {
		display: block;
		width: 100%;

		.top-background {
			width: 100%;
			height: 200rpx;
			background-color: #ccc;
		}

		.infobody {
			display: block;
			padding-left: 20px;
			padding-right: 20px;

			.header {
				margin-top: 10px;
				justify-content: space-between;

				.user-avatar {
					position: absolute;
					top: 110px;
					transform: translateY(-50%);
				}

				.btns {
					position: relative;
					left: 60%;
					justify-content: space-between;
				}
			}

			.userinfo {
				margin-top: 10px;
				display: block;

				.usernameinfo {
					align-items: center;

					.gender {
						margin-left: 10px;
						line-height: 32rpx;
						padding: 2px;
						background-color: #f7f7f7;
					}
				}

				.otherinfo {
					margin-top: 10px;

					h4 {
						margin-right: 10rpx;
						margin-left: 10rpx;
					}

					uni-text {
						color: #8b8b8b;
					}
				}

				.frontend {
					margin-top: 10px;
					font-weight: 600;
				}

				.desc {
					margin-top: 10px;
					color: #8b8b8b;
				}
			}

			.Infotabs {
				margin-top: 10px;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
