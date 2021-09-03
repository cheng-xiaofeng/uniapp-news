<template>
	<view class="tab-container">
		<view class="tabs-item">
			<navigator url="navigate/navigate?title=navigate">
				<u-image width="100rpx" height="100rpx" src="../../../imgs/money.png"></u-image>
				<text class="grid-text">提现兑换</text>
			</navigator>
		</view>
		<view class="tabs-item">
			<navigator url="navigate/navigate?title=navigate">
				<u-image width="100rpx" height="100rpx" src="../../../imgs/income.png"></u-image>
				<text class="grid-text">收入记录</text>
			</navigator>
		</view>
		<view class="tabs-item">
			<navigator url="navigate/navigate?title=navigate">
				<u-image width="100rpx" height="100rpx" src="../../../imgs/invite.png"></u-image>
				<text class="grid-text">邀请好友</text>
			</navigator>
		</view>
		<view class="tabs-item">
			<navigator url="navigate/navigate?title=navigate">
				<u-image width="100rpx" height="100rpx" src="../../../imgs/friends.png"></u-image>
				<text class="grid-text">好友列表</text>
			</navigator>
		</view>
	</view>
</template>
<script>
	export default {
		components: {

		},
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>
<style lang="less">
	.tab-container {
		margin-top: 15px;
		justify-content: space-around;
	}
	.tabs-item {
		width: 25%;
		justify-content: center;
	}
</style>
