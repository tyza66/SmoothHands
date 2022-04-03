<template>
	<view>
		<view class="top"></view>
		<view class="shang">
			<view class="nei">
				<image src="../../static/icon/1630487802969.png"></image>
				<image src="../../static/icon/1630487803052.png"></image>
			</view>
			<image class="datouxiang" src="../../static/tou/2.png"></image>
			<p class="user—name">XiKY</p>
			<p class="user—id">123456</p>
			<p class="user—phone">15712644523</p>
			<view class="az">
				<view class="dv1">
					<image src="../../static/icon/qb.png"></image>
					<p>我的钱包</p>
				</view>
				<view class="dv2">
					<image src="../../static/icon/1630487803035.png"></image>
					<p>积分商城</p>
				</view>
			</view>
		</view>
		<view class="wodedingdan">
			<p>我的订单</p>
			<view class="neirong">
				<view class="one"><image src="../../static/icon/1630487802989.png"><p>待付款</p></view>
				<view class="one"><image src="../../static/icon/1630487803005.png"><p>待发布</p></view>
				<view class="one"><image src="../../static/icon/1630487803013.png"><p>进行中</p></view>
				<view class="one"><image src="../../static/icon/1630487803019.png"><p>已完成</p></view>
			</view>
		</view>
		<view class="wodejeidan">
			<p>我的接单</p>
			<view class="neirong">
				<view class="one"><image src="../../static/icon/1630487802977.png"><p>现有单</p></image></view>
				<view class="one"><image src="../../static/icon/1630487803013.png"><p>进行中</p></view>
				<view class="one"><image src="../../static/icon/1630487803019.png"><p>已完成</p></view>
				<view class="one"><image src="../../static/icon/1630487802952.png"><p>申请接单</p></view>
			</view>
		</view>
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
		background-color: #E5E5E5;
	}

	.shang {
		position: relative;
		width: 100%;
		height: 450rpx;
		background: #E5E5E5;
		border-radius: 0 0 80rpx 80rpx;
	}

	.nei {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		height: 100rpx;
	}

	.nei image {
		float: right;
		width: 65rpx;
		height: 65rpx;
		margin: auto 10rpx;
		margin-right: 10rpx;
	}

	.shang .datouxiang {
		position: absolute;
		width: 150rpx;
		height: 150rpx;
		left: 40rpx;
	}

	.shang .user—name {
		position: absolute;
		left: 240rpx;
		top: 120rpx;
		font-size: 55rpx;
	}

	.shang .user—id {
		position: absolute;
		left: 240rpx;
		top: 185rpx;
		font-size: 45rpx;
		font-weight: 300;
	}

	.shang .user—phone {
		position: absolute;
		left: 240rpx;
		top: 225rpx;
		font-size: 45rpx;
		font-weight: 300;
	}

	.shang .az {
		position: absolute;
		width: 80%;
		height: 120rpx;
		left: 75rpx;
		top: 300rpx;
	}

	.az .dv1 {
		float: left;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 120rpx;
		height: 120rpx;
	}

	.az .dv2 {
		float: right;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 120rpx;
		height: 120rpx;
	}

	.dv1 image,
	.dv2 image {
		width: 70rpx;
		height: 70rpx;
	}

	.dv1 p,
	.dv2 p {
		font-size: 15rpx;
	}

	.wodedingdan {
		width: 700rpx;
		height: 270rpx;
		margin: 0 auto;
		margin-top: 20rpx;
		border-radius: 45rpx;
		background: #C7D9F8;
	}

	.wodejeidan {
		width: 700rpx;
		height: 270rpx;
		margin: 0 auto;
		margin-top: 20rpx;
		border-radius: 45rpx;
		background: #FCE9CA;
	}

	.wodedingdan p,
	.wodejeidan p {
		font-size: 40rpx;
		margin-left: 25rpx;
		font-weight: 600;
	}

	.neirong {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		width: 650rpx;
		height: 200rpx;
		margin: 0 auto;
		margin-top: 8rpx;
	}

	.neirong .one{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 160rpx;
		height: 160rpx;
	}
	.one image{
		width: 95rpx;
		height: 95rpx;
	}
	.one p{
		font-size: 35rpx;
		text-align: left;
		width: 140rpx;
		font-family: "楷体";
	}
</style>
