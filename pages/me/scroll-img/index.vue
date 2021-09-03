<template>
	<view>
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" indicator-active-color="#fff" :circular="true">
			<swiper-item>
				<navigator url="navigate/navigate?title=navigate">
				   <image style="width: 100%;height: 100%;" src="../../../imgs/invitation.png"></image>
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator url="navigate/navigate?title=navigate">
				<image style="width: 100%;height: 100%;" src="../../../imgs/walk.png"></image>
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator url="navigate/navigate?title=navigate">
				<image style="width: 100%;height: 100%;" src="../../../imgs/sleep.png"></image>
				</navigator>
			</swiper-item>
		</swiper>
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
	.swiper {
		width: 100%;
		height: 90px;
		margin-top: 15px;
		/deep/ uni-navigator {
			height: 100%;
		}
	}
</style>
