<template>
	<u-grid :col="4" :border="false">
		<u-grid-item v-for="item in apps" :key="item.id">
			<u-image width="51rpx" height="51rpx" :src="item.iconUrl"></u-image>
			<view class="grid-text">{{item.name}}</view>
		</u-grid-item>
	</u-grid>
</template>
<script>
	export default {
		components: {

		},
		data() {
			return {
				apps: [{
					name: '消息通知',
					id: 'a1',
					iconUrl: '../../../imgs/inform.png'
				}, {
					name: '收藏',
					id: 'a2',
					iconUrl: '../../../imgs/collection.png'
				}, {
					name: '系统设置',
					id: 'a3',
					iconUrl: '../../../imgs/setting.png'
				}, {
					name: '关注',
					id: 'a4',
					iconUrl: '../../../imgs/attention.png'
				}, {
					name: '历史',
					id: 'a5',
					iconUrl: '../../../imgs/history.png'
				}, {
					name: '小程序',
					id: 'a6',
					iconUrl: '../../../imgs/programs.png'
				}, {
					name: '我的书架',
					id: 'a7',
					iconUrl: '../../../imgs/shelf.png'
				}, {
					name: '广告推广',
					id: 'a8',
					iconUrl: '../../../imgs/ad.png'
				}, {
					name: '钱包',
					id: 'a9',
					iconUrl: '../../../imgs/wallet.png'
				}, {
					name: '扫一扫',
					id: 'a10',
					iconUrl: '../../../imgs/scan.png'
				}, {
					name: '用户反馈',
					id: 'a11',
					iconUrl: '../../../imgs/feedback.png'
				}, {
					name: '圆梦精灵',
					id: 'a12',
					iconUrl: '../../../imgs/spirit.png'
				}, {
					name: '玩法攻略',
					id: 'a13',
					iconUrl: '../../../imgs/play.png'
				}, {
					name: '预约',
					id: 'a14',
					iconUrl: '../../../imgs/appointment.png'
				}, {
					name: '草稿箱',
					id: 'a15',
					iconUrl: '../../../imgs/draft.png'
				}, {
					name: '创作首页',
					id: 'a16',
					iconUrl: '../../../imgs/creation.png'
				}, {
					name: '头条内测',
					id: 'a17',
					iconUrl: '../../../imgs/test.png'
				}]
			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
	.grid-text {
		margin-top: 10px;
	}
</style>
