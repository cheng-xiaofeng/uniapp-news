<template>
	<view class="container">
		<status-bar />
		<majar-content />
		<bottom-modal />
	</view>
</template>

<script>
	import BottomModal from './BottomModal.vue'
	import StatusBar from './StatusBar.vue'
	import MajarContent from './MajarContent.vue'
	
	
	export default {
		components: {
		    BottomModal,
		    StatusBar,
			MajarContent,
		  },
	}
</script>

<style lang="less">
	.container {
		display: block;
		width: 100%;
	}
</style>
