<template>
	<view class="money-container">
		<view class="money">
			<h3>30.22 <text>元</text></h3>
			<text>现金金额</text>
		</view>
		<view class="money">
			<h3>725</h3>
			<view>金币金额<u-icon name="question-circle-fill"></u-icon></view>
		</view>
		<view class="get-money">
			<u-image width="34rpx" height="34rpx" src="../../../imgs/coin.png"></u-image>
			<text>去领钱</text>
		</view>
	</view>
</template>
<script>
	export default {
		components:{
			
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>
<style lang="less">
	.money-container {
		margin-top: 10px;
		justify-content: space-between;
		padding-left: 20px;
		padding-right: 20px;
		.money {
			flex-direction: column;
			align-items: center;
		}
		.get-money {
			width: 20%;
			align-items: center;
		}
	}
	
</style>