<template>
	<view>
		<view class="top"></view>
		<view class="search">
			<view class="bhu">
				<image class="pos" src="../../static/icon/dui.png">
					<p>标记已读</p>
				</image>
			</view>
			<view class="find"><input type="text"></input>
				<image class="pos" src="../../static/icon/1630487803068.png">
			</view>
			<image class="renming" src="../../static/icon/a.jpg"></image>
			<image class="jia" src="../../static/icon/1630487803044.png"></image>
		</view>
		<view :class="{am:i%2==0,am1:i%2!=0}" v-for="(item,i) in all">
			<image class="touxiang" :src="item[0]"></image>
			<p class="ming">{{item[1]}}</p>
			<p class="shi">{{item[2]}}</p>
			<image class="dianhua" src="../../static/icon/dianhua.jpg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				all: [
					["../../static/tou/1.png", "快递送餐1", "同学，你的餐到了，给你放楼下啦记得取走！"],
					["../../static/tou/2.png", "快跑小鱼", "请问需要点什么？如果有任何需要立刻下单哦~"],
					["../../static/tou/3.png", "魔女服装店", "快递件：456564564561，收地址：*****"],
					["../../static/tou/4.png", "景区开发商", "投资请联系张先生，这里特为你开创一切"],
					["../../static/tou/5.png", "一品精品", "最近节日大七五折，任何精品只有你想不到"]
				]
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
		width: 50rpx;
		height: 50rpx;
	}

	.bhu p {
		margin-left: 10rpx;
		display: inline-block;
		font-family: "楷体";
		font-weight: 600;
	}

	.find {
		position: relative;
		display: inline-block;
		width: 300rpx;
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
		left: 240rpx;
		top: 12rpx;
	}

	.renming {
		width: 60rpx;
		height: 60rpx;
		margin-left: 60rpx;
	}

	.jia {
		width: 45rpx;
		height: 45rpx;
		margin-left: 20rpx;
	}

	.am {
		position: relative;
		width: 100%;
		height: 130rpx;
		background-color: #D0E0F3;
	}

	.am1 {
		position: relative;
		width: 100%;
		height: 130rpx;
		background-color: #FCE1C4;
	}

	.am .touxiang,
	.am1 .touxiang {
		position: absolute;
		width: 80rpx;
		height: 80rpx;
		top: 25rpx;
		left: 40rpx;
	}

	.am .dianhua,
	.am1 .dianhua {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		top: 25rpx;
		left: 680rpx;
	}

	.am .ming,
	.am1 .ming {
		position: absolute;
		height: 40rpx;
		top: 25rpx;
		left: 140rpx;
		font-family: "楷体";
		font-weight: 600rpx;
	}

	.am .shi,
	.am1 .shi {
		position: absolute;
		height: 40rpx;
		color: #7A6A57;
		top: 65rpx;
		left: 140rpx;
		font-family: "楷体";
		font-weight: 600rpx;
		font-size: 30rpx;
	}
</style>
