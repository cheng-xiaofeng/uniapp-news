<template>
	<view class="container">
		<me-info />
		<wallet />
		<some-tabs />
		<scroll-img />
		<other />
	</view>
</template>
<script>
	import MeInfo from './me-info/index.vue'
	import Wallet from './wallet/index.vue'
	import SomeTabs from './some-tabs/index.vue'
	import ScrollImg from './scroll-img/index.vue'
	import Other from './others/index.vue'
	export default {
		components: {
			MeInfo,
			Wallet,
			SomeTabs,
			ScrollImg,
			Other
		},
		mounted() {

		},
		methods: {

		}
	}
</script>
<style lang="less" scoped>
	.container {
		display: block;
		padding-left: 15px;
		padding-right: 15px;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: #232323;
	}
</style>
