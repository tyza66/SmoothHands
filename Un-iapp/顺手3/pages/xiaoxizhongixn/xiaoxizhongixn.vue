<template>
	<view>
		<view class="top"></view>
		<view class="bg"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
		background-image: url(../../static/tu/gxx.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
</style>
