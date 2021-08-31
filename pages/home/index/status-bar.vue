<template>
	<view class="status_bar">
		<!-- 这里是状态栏 -->
		<view class="left-icon">
			<u-circle-progress width="70" border-width="6" active-color="#e68f25" :percent="percent">
				<view class="u-progress-content">
					<u-image width="51rpx" height="51rpx" src="../../../imgs/red-bag.png"></u-image>
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
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		data() {
			return {
				value: '',
				percent: 0,
			}
		},
		mounted() {
			this.circleInterval = setInterval(() => {
				if (this.percent == 100) {
					this.percent = 0
				}
				this.percent += 1
			}, 500)
		},
		methods: {
			...mapActions('home', [
				'togglePopupAction', 
				// 将 `this.addCountAction()` 映射为 `this.$store.dispatch('addCountAction')`
			]),
			togglePopup(bool) {
				this.togglePopupAction({bool})
			},
			search(e) {
			
			},
		}
	}
</script>

<style lang='less'>
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
	
</style>
