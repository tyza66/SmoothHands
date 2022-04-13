<template>
	<view>
		<view class="top"></view>
		<view class="search">
			<view class="bhu">
				<!--<image class="pos" src="../../static/icon/1630487803061.png">
					<picker :value="index" :range="array">
					        <view>{{array[index]}}</view>
					    </picker>
				</image>-->
			</view>
			<view class="find"><input type="text"></input>
				<p>请输入想要的内容</p>
				<image class="pos" src="../../static/icon/1630487803068.png">
			</view>
			<!--<image class="jia" src="../../static/icon/1630487803044.png"></image>-->
		</view>
		<view class="bg"></view>
		<!--<view class="show">
			<view class="icons">
				<view>
					<image src="../../static/icon/1630487803116.png"></image>
					<p>美食</p>
				</view>
				<view>
					<image src="../../static/icon/dy.png"></image>
					<p>电影</p>
				</view>
				<view>
					<image src="../../static/icon/101.png"></image>
					<p>景点</p>
				</view>
				<view>
					<image src="../../static/icon/11.png"></image>
					<p>休闲</p>
				</view>
				<view>
					<image src="../../static/icon/1630487803101.png"></image>
					<p>丽人</p>
				</view>
				<view>
					<image src="../../static/icon/1630487803091.png"></image>
					<p>学习</p>
				</view>
				<view>
					<image src="../../static/icon/1630487803084.png"></image>
					<p>医疗</p>
				</view>
				<view>
					<image src="../../static/icon/1630487803075.png"></image>
					<p>拍照</p>
				</view>
			</view>
			<view class="tag">
				<view>
					<p>榜单</p>
				</view>
				<view>
					<p>关注</p>
				</view>
				<view>
					<p>推荐</p>
				</view>
				<view>
					<p>附近</p>
				</view>
				<view>
					<p>美食</p>
				</view>
				<view>
					<p>电影</p>
				</view>
			</view>
		</view>
		<view class="info1">
			<image src="../../static/tou/tou1.jpg"></image>
			<p class="name">tyza66</p>
			<p class="wen">一楼麻辣拌yyds，已经连续第十餐了~</p>
		</view>
		<view class="info2">
			<image class="tou" src="../../static/tou/gouai.jpg"></image>
			<p class="name">心本光明</p>
			<p class="wen">笔架山打卡！！面对渤海，毗邻锦州港</br>坐落在锦州经济技术开发区内，是道教名山胜地</br>山有三峰，二低一高，形如笔架，速速来玩</p>
			<image class="tu1" src="../../static/tu/tu1.jpeg"></image>
			<image class="tu2" src="../../static/tu/tu2.jpg"></image>
			<image class="tu3" src="../../static/tu/tu3.jpg"></image>
		</view>
		<view class="info3">
			<image src="../../static/tou/ren.jpg"></image>
			<p class="name">星辰</p>
			<p class="wen">分享一部电影《小森林》</br>今天和同学刚看完，电影院被我俩承包了</p>
		</view>
		<view class="info3">
			<image src="../../static/tou/ss.jpg"></image>
			<p class="name">顺手官方</p>
			<p class="wen">顺手</br>让你的生活更便捷！</p>
		</view>-->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: ['锦州市▼', '鞍山市▼', '葫芦岛▼', '天津市▼'],
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
		background-color: #FFFFFF;
	}

	.search {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100rpx;
	}
	.bg{
		width: 100%;
		height: 1300rpx;
		background-image: url(../../static/tu/s1.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	/*.bhu {
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
	}*/

	.find {
		position: relative;
		display: inline-block;
		width: 620rpx;
		height: 65rpx;
		border-radius: 40rpx;
		border: black solid 1px;
	}

	.find input {
		width: 230rpx;
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
		left: 560rpx;
		top: 10rpx;
	}
	.find p{
		color: #555555;
		position: absolute;
		left: 180rpx;
		top: 10rpx;
	}
	/*.jia {
		width: 45rpx;
		height: 45rpx;
		margin-left: 100rpx;
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
		height: 300rpx;
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

	.tag {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		width: 90%;
		height: 80rpx;
		margin: 0 auto;
	}

	.tag view {
		margin: 0 auto;
		background: #E1DBBE;
		height: 35rpx;
		width: 80rpx;
		border-radius: 20rpx;
	}

	.tag view p {
		text-align: center;
		font-family: "楷体";
		font-weight: 500;
	}

	.info1 {
		position: relative;
		width: 700rpx;
		height: 120rpx;
		margin: 0 auto;
		margin-top: 10px;
		border-radius: 45rpx;
		background: #F9DFBE;
		border: #F09420 solid 3px;
	}

	.info1 image {
		position: absolute;
		width: 60rpx;
		height: 60rpx;
		left: 30rpx;
		top: 10rpx;
	}

	.info1 .name {
		position: absolute;
		color: #000000;
		font-weight: 700;
		height: 40rpx;
		font-family: 'Courier New', Courier, monospace;
		left: 100rpx;
		top: 15rpx;
	}

	.info1 .wen {
		position: absolute;
		font-size: 28rpx;
		color: #746561;
		font-weight: 600;
		height: 40rpx;
		font-family: "楷体";
		left: 100rpx;
		top: 65rpx;
	}

	.info2 {
		position: relative;
		width: 700rpx;
		height: 380rpx;
		margin: 0 auto;
		margin-top: 10px;
		border-radius: 45rpx;
		background: #F9DFBE;
		border: #F09420 solid 3px;
	}

	.info2 .tou {
		position: absolute;
		width: 60rpx;
		height: 60rpx;
		left: 30rpx;
		top: 10rpx;
	}

	.info2 .name {
		position: absolute;
		color: #000000;
		font-weight: 700;
		height: 40rpx;
		font-family: 'Courier New', Courier, monospace;
		left: 100rpx;
		top: 15rpx;
	}

	.info2 .wen {
		position: absolute;
		font-size: 28rpx;
		color: #746561;
		font-weight: 600;
		height: 40rpx;
		font-family: "楷体";
		left: 100rpx;
		top: 65rpx;
	}

	.info2 .tu1 {
		position: absolute;
		width: 190rpx;
		height: 150rpx;
		left: 80rpx;
		top: 200rpx;
	}

	.info2 .tu2 {
		position: absolute;
		width: 190rpx;
		height: 150rpx;
		left: 280rpx;
		top: 200rpx;
	}

	.info2 .tu3 {
		position: absolute;
		width: 190rpx;
		height: 150rpx;
		left: 480rpx;
		top: 200rpx;
	}

	.info3 {
		position: relative;
		width: 700rpx;
		height: 150rpx;
		margin: 0 auto;
		margin-top: 10px;
		border-radius: 45rpx;
		background: #F9DFBE;
		border: #F09420 solid 3px;
	}

	.info3 image {
		position: absolute;
		width: 60rpx;
		height: 60rpx;
		left: 30rpx;
		top: 10rpx;
	}

	.info3 .name {
		position: absolute;
		color: #000000;
		font-weight: 700;
		height: 40rpx;
		font-family: 'Courier New', Courier, monospace;
		left: 100rpx;
		top: 15rpx;
	}

	.info3 .wen {
		position: absolute;
		font-size: 28rpx;
		color: #746561;
		font-weight: 600;
		height: 40rpx;
		font-family: "楷体";
		left: 100rpx;
		top: 65rpx;
	}
	picker view{
		font-family: "楷体";
		font-weight: 600;
	}*/
</style>
