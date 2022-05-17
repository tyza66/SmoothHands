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
					<image src="../../static/icon/lo1.png"></image>
					<p>新闻公告</p>
				</view>
				<view>
					<image src="../../static/icon/lo2.png"></image>
					<p>社区服务中心</p>
				</view>
				<view>
					<image src="../../static/icon/lo3.png"></image>
					<p>社区论坛</p>
				</view>
				<view>
					<image src="../../static/icon/lo4.png"></image>
					<p>社区活动</p>
				</view>
				<view>
					<image src="../../static/icon/lo5.png"></image>
					<p>物业账单</p>
				</view>
				<view>
					<image src="../../static/icon/lo6.png"></image>
					<p>在线缴费</p>
				</view>
				<view>
					<image src="../../static/icon/lo7.png"></image>
					<p>社区医疗</p>
				</view>
				<view>
					<image src="../../static/icon/lo8.png"></image>
					<p>办事指南</p>
				</view>
				<view>
					<image src="../../static/icon/lo9.png"></image>
					<p>建议反馈</p>
				</view>
				<view>
					<image src="../../static/icon/lo10.png"></image>
					<p>生活咨询</p>
				</view>
				<view>
					<image src="../../static/icon/lo11.png"></image>
					<p>政府服务热线</p>
				</view><view>
					<image src="../../static/icon/lo12.png"></image>
					<p>社会救助</p>
				</view>
				
			</view>
		</view>
		<view class="kangyi"></view>
		<view class="infoma">
			<view class="in">
				<view class="line"></view>
				<view class="circle"></view>
				<view class="nxiao">
					<view class="shangmian">
						<p class="p1">寻U盘</p>
						<p class="p2">银色</p>
						<p class="p3">></p>
					</view>
					<view class="xiamian">
						<image class="a1" src="../../static/tu/zhong.png"></image>
						<p class="a2">2022-1-13 16:00</p>
						<image class="a3" src="../../static/icon/lo.png"></image>
						<p class="a4">小区9号楼附近</p>
						<p class="a5">有偿</p>
					</view>
				</view>
			</view>
			<view class="in">
				<view class="line"></view>
				<view class="circle"></view>
				<view class="nxiao">
					<view class="shangmian">
						<p class="p1">寻钱包</p>
						<p class="p2">咖啡色动漫钱包</p>
						<p class="p3">></p>
					</view>
					<view class="xiamian">
						<image class="a1" src="../../static/tu/zhong.png"></image>
						<p class="a2">2022-1-14 18:00</p>
						<image class="a3" src="../../static/icon/lo.png"></image>
						<p class="a4">小区北门附近</p>
						<p class="a5">有偿</p>
					</view>
				</view>
			</view>
			<view class="in">
				<view class="line"></view>
				<view class="circle"></view>
				<view class="nxiao">
					<view class="shangmian">
						<p class="p1">身份证招领</p>
						<p class="p2"></p>
						<p class="p3">></p>
					</view>
					<view class="xiamian">
						<image class="a1" src="../../static/tu/zhong.png"></image>
						<p class="a2">2022-1-18</p>
						<image class="a3" src="../../static/icon/lo.png"></image>
						<p class="a4">小区15号楼下草坪</p>
						<p class="a5">有偿</p>
					</view>
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
		height: 120rpx;
	}

	.icons view image {
		width: 80rpx;
		height: 80rpx;
	}

	.icons view p {
		margin-top: 10rpx;
		font-family: "楷体";
		font-size: 10rpx;
		font-weight: 550;
	}
	.kangyi{
		width: 710rpx;
		height: 300rpx;
		margin: 0 auto;
		margin-top: 10rpx;
		background-image: url(../../static/tu/kangyi.png) ;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.infoma{
		width: 710rpx;
		margin: 0 auto;
		margin-top: 10rpx;
	}
	.in{
		float: left;
		position: relative;
		width: 710rpx;
		height: 130rpx;

	}
	.in .line{
		position: absolute;
		height: 130rpx;
		width: 1px;
		left: 12rpx;
		border-left: #555555 dashed 3rpx;
	}
	.in .circle{
		position: absolute;
		width: 15rpx;
		height: 15rpx;
		left: 2.5rpx;
		top: 15rpx;
		background: #7A6A57;
		border-radius: 7.5rpx;
		border: #000000 solid 1px;
	}
	.in .nxiao{
		position: absolute;
		width: 675rpx;
		height: 113rpx;
		left: 25rpx;
		top: 5rpx;
		border: #000000 solid 2px;
	}
	.nxiao .shangmian{
		position: relative;
		width: 675rpx;
		height: 70rpx;
		border-bottom: #000000 dashed 1rpx;
	}
	.nxiao .xiamian{
		position: relative;
		width: 675rpx;
		height: 43rpx;
	}
	.shangmian .p1{
		font-size: 35rpx;
		font-weight: 500;
		margin-left: 10rpx;
	}
	.shangmian .p2{
		font-size: 10rpx;
		font-weight: 500;
		color: #555555;
		margin-left: 10rpx;
		margin-top: -12rpx;
	}
	.shangmian .p3{
		position: absolute;
		ont-size: 35rpx;
		color: #555555;
		left: 650rpx;
		top: 28rpx;
	}
	.xiamian .a1{
		position: absolute;
		top: -7rpx;
		left: -5rpx;
		width: 50rpx;
		height: 50rpx;
	}
	.xiamian .a2{
		position: absolute;
		top: 4rpx;
		left: 35rpx;
		font-size: 5rpx;
	}
	.xiamian .a3{
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		left: 265rpx;
		top: 1rpx;
	}
	.xiamian .a4{
		position: absolute;
		top: 4rpx;
		left: 300rpx;
		font-size: 5rpx;
	}
	.xiamian .a5{
		position: absolute;
		top: 4rpx;
		left: 600rpx;
		color: #F09420;
		font-size: 5rpx;
	}
</style>
