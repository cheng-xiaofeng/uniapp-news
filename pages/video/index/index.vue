<template>
	<view>
		<status-bar :isHome="false"/>
		<major-content />
	</view>
</template>

<script>
	import StatusBar from '../../components/StatusBar.vue'
	import MajorContent from './MajorContent.vue'
	export default {
		components:{
			StatusBar,
			MajorContent
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
	
</style>