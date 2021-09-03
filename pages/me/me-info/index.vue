<template>
	<view>
		<view class="userInfo">
			<view @tap="goto('')">
				<u-avatar :style="{marginRight: '20rpx'}"  src="../../../static/avatar.jpg" size="100">
				</u-avatar>
				<h3 class="words">{{userName}}</h3>
				<u-icon name="arrow-right"  size="28" :custom-style ="{marginLeft: '6px'}"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
			}
		},
		computed: {
			...mapState(['userName'])
		},
		methods: {
			goto(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.userInfo {
		margin-top: 20px;
		padding-left: 20px;
		padding-right: 20px;
		h3 {
			line-height: 55px;
		}
	}
</style>
