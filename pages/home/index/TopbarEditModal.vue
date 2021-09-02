<template>
	<view>
		<u-popup v-model="visible" mode="bottom" class="popup" :closeable="true" close-icon-pos="top-left">
			<view class="channel">
				<view>
					<h3>我的频道</h3>
					<text>点击进入频道</text>
				</view>
				<view>
					<u-button @tap="editChannel" shape="circle" type="error" plain size="mini">编辑</u-button>
				</view>
			</view>
			<view class="channel-item">
				<u-button :disabled="item.id == 'u0'" :custom-style="customStyle" :hair-line="false" v-for="(item) in scrollbarItems" :key="item.id" >{{item.name}}</u-button>
			</view>
			<view class="channel">
				<view>
					<h3>频道推荐</h3>
					<text>点击添加频道</text>
				</view>
			</view>
			<view class="channel-item">
				<u-button :hair-line="false" v-for="item in allItems" :key="item.id" :custom-style="customStyle" >+{{item.name}}</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	export default {
		data() {
			return {
				customStyle: {
					border: 'none'
				}
			}
		},
		props: ['visible', 'scrollbarItems', 'allItems'],
		methods: {
			togglePopup() {
				this.$emit('togglePopup', false)
			},
			editChannel() {
				
			}
		}
	}
</script>

<style lang="less">
	
	/deep/.popup .u-drawer-content {
		padding: 10px 30px 0 15px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		.u-drawer__scroll-view {
			margin-top: 30px;
		}
	}
	.channel {
		justify-content: space-between;
		h3 {
			margin-right: 10px;
		}
		uni-text {
			line-height: 25px;
		}
	}
	.channel-item {
		display: grid;
		grid-template-columns: repeat(4, 26%);
		grid-template-rows: repeat(auto-fill, 50px);
	}
</style>
