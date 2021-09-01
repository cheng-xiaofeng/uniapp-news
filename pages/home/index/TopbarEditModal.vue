<template>
	<view>
		<u-popup v-model="visible" mode="bottom" class="popup">
			<view>x</view>
			<view class="channel">
				<view>
					<h3>我的频道</h3>
					<text>点击进入频道</text>
				</view>
				<view>
					<u-button shape="square" type="error" plain size="mini">编辑</u-button>
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
				<u-button :hair-line="false" :custom-style="customStyle" v-for="item in allItems" :key="item.id">+{{item.name}}</u-button>
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
		}
	}
</script>

<style lang="less">
	
	/deep/.popup .u-drawer-content {
		padding: 10px 30px 0 30px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	.channel {
		justify-content: space-between;
	}
	.channel-item {
		display: flex;
		flex-wrap: wrap;
		margin-top: 5px;
		/deep/ .u-btn {
			width: 75px;
		}
	}
</style>
