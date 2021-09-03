<template>
	<view class="container">
		<me-info />
		<other />
	</view>
</template>
<script>
	import MeInfo from './me-info/index.vue'
	import Other from './others/index.vue'
	export default {
		components: {
			MeInfo,
			Other
		},
		mounted() {

		},
		methods: {

		}
	}
</script>
<style lang="less">
	.container {
		display: block;
		padding-left: 20px;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: #232323;
	}
</style>
