<template>
	<view>
		<view class="top"></view>
		<view class="search">
			<view class="bhu">
				<image class="pos" src="../../static/icon/1630487803061.png">
					<p>渤海大学</p>
				</image>
			</view>
			<view class="find"><input type="text" placeholder="      请输入想要的内容"></input>
				<image class="pos" src="../../static/icon/1630487803068.png">
			</view>
			<view class="touxiang1" @touchstart="start()" @touchend="end()"></view>
		</view>
		<view class="show">
			<view class="icons">
				<view>
					<image src="../../static/icon/juzi.png"></image>
					<p>水果篮子</p>
				</view>
				<view>
					<image src="../../static/icon/daocha.png"></image>
					<p>食堂顺手</p>
				</view>
				<view>
					<image src="../../static/icon/xiaoche.png"></image>
					<p>出行顺手</p>
				</view>
				<view>
					<image src="../../static/icon/sold.png"></image>
					<p>闲置顺手</p>
				</view>
				<view>
					<image src="../../static/icon/ya.png"></image>
					<p>药店顺手</p>
				</view>
				<view>
					<image src="../../static/icon/xi.png"></image>
					<p>快递顺手</p>
				</view>
				<view>
					<image src="../../static/icon/tuiche.png"></image>
					<p>超市顺手</p>
				</view>
				<view>
					<image src="../../static/icon/rent.png"></image>
					<p>物品顺手</p>
				</view>
			</view>
		</view>
		<view class="kangyi">
			<swiper class="sw1" autoplay="true" duration="1000" circular="true">
				<swiper-item  class="sw_item" >
					<image class="sw_item_in" mode="scaleToFill" src="../../static/tu/4.png" image>
				</swiper-item>
				<swiper-item  class="sw_item" >
					<image class="sw_item_in" mode="scaleToFill" src="../../static/tu/1.png" image>
				</swiper-item>
				<swiper-item  class="sw_item" >
					<image class="sw_item_in" mode="scaleToFill" src="../../static/tu/3.png" image>
				</swiper-item>
			</swiper>
			<p></p>
		</view>
		<view class="dan">
			<p class="title">取快递</p>
			<p class="to">送到3651</p>
			<image class="qian" src="../../static/icon/qian.png"></image>
			<p class="bi">顺手币：</p>
			<p class="qian1">￥1.0</p>
			<p class="riqi">2021-01-24 13:05:20</p>
			<view class="xiangqing"><p>查看详情</p></view>
		</view>
		<view class="dan">
			<p class="title">取快递</p>
			<p class="to">送到工科楼315</p>
			<image class="qian" src="../../static/icon/qian.png"></image>
			<p class="bi">顺手币：</p>
			<p class="qian1">￥2.0</p>
			<p class="riqi">2021-01-24 12:50:00</p>
			<view class="xiangqing"><p>查看详情</p></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loop: null
			}
		},
		onLoad() {

		},
		methods: {
			start() {
			
			      clearTimeout(this.loop); //再次清空定时器，防止重复注册定时器
			
			      this.loop = setTimeout(() => {
			
			        window.location.href="https://shunshou.rth.app/";
			
			      }, 1000);
			
			    },
			
			 end() {
			
			      clearTimeout(this.loop); //清空定时器，防止重复注册定时器
			
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

	.search {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		height: 100rpx;
	}

	.bhu {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 200rpx;
		height: 76rpx;
		margin-top: 12rpx;
		margin-left: 25rpx;
	}

	.bhu .pos {
		width: 40rpx;
		height: 40rpx;
	}

	.bhu p {
		margin-left: 10rpx;
		display: inline-block;
		font-family: "楷体";
		font-weight: 800;
	}

	.find {
		position: relative;
		display: inline-block;
		width: 430rpx;
		height: 65rpx;
		border-radius: 40rpx;
		border: black solid 1px;
	}

	.find input {
		width: 380rpx;
		height: 60rpx;
		position: absolute;
		font-family: "楷体";
		left: 10rpx;
		top: 4rpx;
	}

	.find image {
		width: 45rpx;
		height: 45rpx;
		position: absolute;
		left: 380rpx;
		top: 12rpx;
	}

	.touxiang1{
		width: 90rpx;
		height: 90rpx;
		border-radius: 45rpx;
		margin-left: 5rpx;
		background-image: url(../../static/tu/tc.png) ;
		background-repeat: no-repeat ;
		background-size: 100% 100%;
	}
	.show {
		width: 700rpx;
		height: 400rpx;
		margin: 0 auto;
		border-radius: 45rpx;
		background-color: #D9E9F6;
		border: #8AA9C5 solid 3px;
	}

	.icons {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		width: 650rpx;
		height: 400rpx;
		margin: 0 auto;
	}

	.icons view {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 150rpx;
		height: 150rpx;
	}

	.icons view image {
		width: 100rpx;
		height: 100rpx;
	}

	.icons view p {
		margin-top: 10rpx;
		font-family: "楷体";
		font-size: 30rpx;
		font-weight: 550;
	}

	.kangyi {
		position: relative;
		width: 706rpx;
		height: 400rpx;
		margin: 0 auto;
		margin-top: 20rpx;
		background: url();
		background-color: #007AFF;
	}
	
	.kangyi .sw1{
		width: 100%;
		height: 100%;
	}
	.kangyi p {
		position: absolute;
		color: white;
		font-size: 35rpx;
		top: 210rpx;
		left: 30rpx;
	}

	.dan {
		position: relative;
		width: 700rpx;
		height: 170rpx;
		margin: 0 auto;
		margin-top: 20rpx;
		border-radius: 45rpx;
		background: #F9DFBE;
		border: #F09420 solid 2px;
	}

	.dan .title {
		position: absolute;
		font-size: 32rpx;
		font-family: "楷体";
		font-weight: 600;
		width: 100rpx;
		height: 40rpx;
		left: 35rpx;
		top: 15rpx
	}

	.dan .to {
		position: absolute;
		font-size: 32rpx;
		font-family: "楷体";
		font-weight: 400;
		height: 40rpx;
		left: 35rpx;
		top: 50rpx
	}

	.dan .qian {
		position: absolute;
		width: 70rpx;
		height: 70rpx;
		left: 25rpx;
		top: 90rpx
	}
	
	.dan .bi {
		position: absolute;
		font-size: 32rpx;
		font-family: "楷体";
		font-weight: 350;
		width: 150rpx;
		height: 70rpx;
		left: 95rpx;
		top: 110rpx
	}
	.dan .qian1{
		position: absolute;
		color: red;
		font-size: 32rpx;
		font-family: "楷体";
		font-weight: 600;
		width: 150rpx;
		height: 70rpx;
		left: 205rpx;
		top: 110rpx
	}
	.dan .riqi{
		position: absolute;
		color: #8B7D67;
		left: 335rpx;
		top: 10rpx
	}
	.dan .xiangqing{
		position: absolute;
		background-color: #F5BD6A;
		border-radius: 40rpx;
		width: 210rpx;
		height: 70rpx;
		left: 435rpx;
		top: 70rpx
	}
	.xiangqing p{
		text-align: center;
		margin-top: 15rpx;
		font-family: "楷体";
		font-weight: 600;
	}
	.sw_item_in{
		width: 100%;
		height: 400rpx;
	}
</style>
