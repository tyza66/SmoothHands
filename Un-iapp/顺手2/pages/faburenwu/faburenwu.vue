<template>
	<view>
		<view class="top"></view>
		<view class="piao">
			<p>渤海大学</p>
			<image class="pos" src="../../static/icon/1630487803061.png">
				<view class="jian"></view>
				<p class="kuai">快递顺手</p>
		</view>
		<view class="zhu">
			<view class="back"></view>
			<view class="biao1">
				<view class="weizhi">
					<view class="dian1"></view>
					<p class="wem">你的位置</p>
				</view>
				<view class="shouhuo">
					<view class="dian2"></view>
					<p class="wem">收件地点</p>
				</view>
			</view>
			<view class="biao2">
				<view class="xinxi">
					<image src="../../static/icon/1630487802952.png"></image>
					<p>填写订单信息</p>
				</view>
				<view class="xx"><p>快递类型：</p> <picker :value="index" :range="array">
                        <view>{{array[index]}}</view>
                    </picker></view>
				<view class="xx"><p>取件码：</p><input type="text"></input></view>
				<view class="xx"><p>昵称：</p><input type="text"></input></view>
				<view class="xx"><p>电话：</p><input type="text"></input></view>
				<view class="xx"><p>地址：</p><input type="text"></input></view>
				<view class="xx"><p>备注：</p><input type="text"></input></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: ['顺丰快递 ▼', '菜鸟驿站 ▼', '韵达快递 ▼', '京东快递 ▼'],
				index: 0
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
		background-color: #FADBB6;
	}

	.piao {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		height: 70rpx;
		background-color: #FADBB6;
	}

	.piao .pos {
		width: 40rpx;
		height: 40rpx;
	}

	.piao p {
		margin-left: 10rpx;
		display: inline-block;
		font-family: "楷体";
		font-weight: 800;
	}

	.jian {
		margin-left: 50%;
		border-top: 10px solid transparent;
		border-left: 20px solid #C5BFCB;
		border-bottom: 10px solid transparent;
	}

	.kuai {
		float: right;
	}

	.zhu {
		position: relative;
		width: 100%;
	}

	.zhu .back {
		position: absolute;
		width: 100%;
		height: 400rpx;
		background: url(../../static/tu/tu.jpg) no-repeat;
		background-size: cover;
		z-index: 0;
	}

	.zhu .biao1 {
		position: absolute;
		width: 600rpx;
		height: 150rpx;
		top: 360rpx;
		left: 75rpx;
		background-color: #FFFFFF;
		border-radius: 75rpx;
		box-shadow: 2.5px 2px 1px #888888;
	}

	.zhu .biao2 {
		position: absolute;
		width: 600rpx;
		height: 620rpx;
		top: 520rpx;
		left: 75rpx;
		background-color: #FFFFFF;
		border-radius: 75rpx;
		box-shadow: 1px 1px 1px 1px #888888;
	}

	.weizhi {
		display: flex;
		align-items: center;
		width: 550rpx;
		height: 60rpx;
		margin: 0 auto;
		margin-top: 16rpx;
	}

	.shouhuo {
		display: flex;
		align-items: center;
		width: 550rpx;
		height: 60rpx;
		margin: 0 auto;
		margin-top: 0rpx;
	}

	.dian1 {
		width: 40rpx;
		height: 40rpx;
		background: #73DBA6;
		border-radius: 20rpx;
		margin-left: 20rpx;
	}

	.dian2 {
		width: 40rpx;
		height: 40rpx;
		background: #010101;
		border-radius: 20rpx;
		margin-left: 20rpx;
	}

	.wem {
		font-family: "楷体";
		font-weight: 600;
		margin-left: 20rpx;
		font-size: 45rpx;
	}

	.xinxi {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 550rpx;
		height: 90rpx;
		margin: 0 auto;
		margin-top: 10rpx;
	}

	.xinxi image {
		width: 50rpx;
		height: 50rpx;
	}

	.xinxi p {
		font-family: "楷体";
		font-weight: 600;
		margin-left: 20rpx;
		font-size: 45rpx;
	}
	.xx{
		display: flex;
		align-items: center;
		background: #F2F2F2;
		width: 550rpx;
		height: 70rpx;
		margin: 10rpx auto;
		margin-top: 10rpx;
		border-radius: 35rpx;
	}
	.xx p{
		width: 180rpx;
		font-family: "楷体";
		font-weight: 400;
		margin-left: 90rpx;
	}
	.xx input{
		margin-left: 10rpx;
	}
</style>
