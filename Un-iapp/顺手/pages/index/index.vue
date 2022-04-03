<template>
	<view>
		<view class="top"></view>
		<div class="bg">
			<div class="init">
				<div class="ics">
					<div class="icon" @click="xiaoyuan()">
						<image src="../../static/icon/t1.png"></image>
						<p>校园顺手</p>
					</div>
					<div class="icon" @click="shequ()">
						<image src="../../static/icon/t2.png"></image>
						<p>社区顺手</p>
					</div>
					<div class="icon" @click="quanmin()">
						<image src="../../static/icon/t3.png"></image>
						<p>全民顺手</p>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			xiaoyuan(){
				uni.reLaunch({
					url:"../xiaoyuanshunshou/xiaoyuanshunshou"
				})
			},
			shequ(){
				window.location.href="https://shunshou2.rth.app/";
			},
			quanmin(){
				window.location.href="https://shunshou3.rth.app/";
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
	}
	.bg .init{
		width: 90%;
		height: 90%;
		margin: 0 auto;
		margin-top:30rpx;
		border: #007AFF solid 5px;
	}
	.ics{
		width: 450rpx;
		height: 600rpx;
		margin: 0 auto;
		margin-top: 330rpx;
	}
	.icon{
		float: left;
		position: relative;
		width: 100%;
		height: 120rpx;
		border-bottom: #2C405A solid 2px;
	}
	.icon image{
		width: 100rpx;
		height: 100rpx;
		margin-top: 10px;
		margin-left: 10px;
	}
	.icon p{
		display: inline;
		position: absolute;
		font-size: 70rpx;
		font-family: "幼圆";
		top: 40rpx;
	}
</style>


