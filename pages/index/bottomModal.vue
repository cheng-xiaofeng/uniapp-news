<template>
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
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	export default {
		data() {
			return {
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
			}
		},
		computed:{
			...mapState({
				showPopup: 'showPopup'
			})
		},
		methods: {
			...mapActions([
				'togglePopupAction', 
			]),
			togglePopup(bool) {
				this.togglePopupAction({bool})
			},
			goto(url) {
				uni.navigateTo({
					url
				});
			}
		}
	}
</script>

<style lang="less">
	
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
