<template>
	<view>
		<view class="top"></view>
		<view class="bg" @click="back()"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				uni.navigateBack({	
				})
			}
		}
	}
</script>

<style>
	.top {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #FFFFFF;
	}
	.bg{
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url(../../static/tu/gqm.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
</style>
