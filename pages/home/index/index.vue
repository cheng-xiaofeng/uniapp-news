<template>
	<view class="container">
		<status-bar />
		<majar-content />
		<bottom-modal />
	</view>
</template>

<script>
	import bottomModal from './bottomModal.vue'
	import statusBar from './status-bar.vue'
	import majarContent from './majarContent.vue'
	
	export default {
		components: {
		    bottomModal,
		    statusBar,
			majarContent
		  },
	}
</script>

<style lang="less">
	.container {
		display: block;
		width: 100%;
	}
</style>
