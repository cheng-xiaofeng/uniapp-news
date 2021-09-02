<template>
	<view class="container">
		<status-bar :isHome="true"/>
		<major-content />
		<bottom-modal />
	</view>
</template>

<script>
	import BottomModal from './BottomModal.vue'
	import StatusBar from '../../components/StatusBar.vue'
	import MajorContent from './MajorContent.vue'
	
	
	export default {
		components: {
		    BottomModal,
		    StatusBar,
			MajorContent,
		  },
	}
</script>

<style lang="less">
	.container {
		display: block;
		width: 100%;
	}
</style>
