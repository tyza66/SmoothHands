<template>
	<view>
		<view class="top"></view>
		<view class="bg">
			<image src="../../static/tu/ditu.png" mode="aspectFill"></image>
		</view>
		<view class="head">
			<image src="../../static/icons/tc.jpg" @touchstart="start()" @touchend="end()"></image>
			<p>锦州市 v</p>
		</view>
		<view class="part2">
			<view class="left">
				<image src="../../static/icons/qian.png"></image>
			</view>
			<view class="mid">
				<view class="yuan1" @click="gorenwu()"><p>顺</p></view>
				<view class="yuan2"><p>闪</p></view>
			</view>
			<view class="right">
				<image src="../../static/icons/ma.png"></image>
			</view>
		</view>
		<view class="part3">
			<view class="biaoti">
				<view class="xiao"><p class="bt">帮我运</p></view>
				<view class="xiao"><p>帮我取</p></view>
				<view class="xiao"><p>帮我买</p></view>
			</view>
			<view class="items">
				<view class="item">
					<image src="../../static/icons/lo.png"></image>
					<p class="p1">书香门第20号3-57</p>
					<p class="p2">请先完善发件信息</p>
					<p class="p3">></p>
				</view>
				<view class="item2" @click="goshou()">
					<image src="../../static/icons/lo.png"></image>
					<p class="p1">请输入收件地址</p>
					<p class="p3">></p>
				</view>
			</view>
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
			
			    },
			goshou(){
				uni.navigateTo({
					url:"../dizhixinxi/dizhixinxi"
				})
			},
			gorenwu(){
				uni.navigateTo({
					url:"../grw/grw"
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
	}
	.gb image{
		position: absolute;
		width: 100%;
		height: 350rpx;
	}
	.head{
		float: left;
		position: absolute;
		width: 100%;
		height: 180rpx;
	}
	.head image{
		position: relative;
		width: 130rpx;
		height: 130rpx;
		top: 20rpx;
		left: 25rpx;
		border-radius: 65rpx;
	}
	.head p{
		position: absolute;
		top: 40rpx;
		left: 40%;
		font-size: 50rpx;
		margin: 0 auto;
	}
	.part2{
		position: relative;
		top: 380rpx;
		width: 100%;
		height: 300rpx;

	}
	.part2 .left{
		float: left;
		width: 100rpx;
		height: 300rpx;
	}
	.left image,.right image{
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		bottom: 0;
	}
	.part2 .right{
		float: right;
		width: 100rpx;
		height: 300rpx;
	}
	.part2 .mid{
		float: left;
		width: 550rpx;
		height: 200rpx;
		margin: 0 auto;
		margin-top: 80rpx;
	}
	.mid .yuan1{
		float: left;
		width: 200rpx;
		height: 200rpx;
		border-radius: 100rpx;
		background-color: #FE5E00;
		border: #007AFF solid 1px;
	}
	.mid .yuan2{
		float: right;
		width: 200rpx;
		height: 200rpx;
		border-radius: 100rpx;
		background-color: #33A9F5;
		border: #F0AD4E solid 1px;
	}
	.yuan1 p,.yuan2 p{
		width: 200rpx;
		height: 200rpx;
		text-align: center;
		font-size: 100rpx;
		margin: 0 aoto;
		margin-top: 25rpx;
	}
	.part3{
		position: relative;
		width: 100%;
		height: 650rpx;
		top: 380rpx;
		border-radius: 60rpx;
		border: #808080 solid 1px;
	}
	.part3 .biaoti{
		width: 500rpx;
		height: 80rpx;
		margin-left: 60rpx;
	}
	.biaoti .xiao{
		float: left;
		border-bottom: #999999 solid 10rpx;
		margin-left: 20rpx;
		margin-top: 10rpx;
	}
	.bt{
		color: #F0AD4E;
	}
	
	.items{
		width: 700rpx;
		height: 500rpx;
		margin: 0 auto;
		margin-top: 10rpx;
	}
	.item{
		position: relative;
		width: 700rpx;
		height: 120rpx;
		border: #999999 solid 1rpx;
		border-radius: 60rpx;
		margin: 0 auto;
		margin-top: 60rpx;
	}
	.item2{
		position: relative;
		width: 700rpx;
		height: 90rpx;
		border: #999999 solid 1rpx;
		border-radius: 60rpx;
		margin: 0 auto;
		margin-top: 60rpx;
	}
	.item image,.item2 image{
		position: absolute;
		width: 80rpx;
		height: 80rpx;
		top: 15rpx;
		left: 25rpx;
	}
	.p1{
		position: absolute;
		left: 100rpx;
		top: 10rpx;
		font-size: 50rpx;
	}
	.item .p2{
		position: absolute;
		color: red;
		left: 120rpx;
		top: 70rpx;
		font-size: 25rpx;
	}
	.item .p3{
		position: absolute;
		left: 650rpx;
		top: 40rpx;
		font-size: 30rpx;
	}
	.item2 .p3{
		position: absolute;
		left: 650rpx;
		top: 30rpx;
		font-size: 30rpx;
	}
</style>
