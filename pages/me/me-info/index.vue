<template>
	<view>
		<view class="userInfo">
			<view>
				<u-avatar :style="{marginRight: '20rpx'}" @tap="goto" src="../../../static/avatar.jpg" size="100">
				</u-avatar>
				<h3 class="words">{{userName}}</h3>
				<u-icon name="arrow-right"  size="28" :custom-style ="{marginLeft: '6px'}"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: '不玩游戏的程序员'
			}
		}
	}
</script>

<style lang="less">
	.userInfo {
		margin-top: 20px;
		h3 {
			line-height: 55px;
		}
	}
</style>
