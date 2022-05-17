<template>
	<view>
		<view class="top"></view>
		<div class="bg">
			<view class="tan" v-if="here">
				<scroll-view scroll-y="true" class="sm"><view><h3>温馨提示</h3><br>
亲爱的用户，感谢您使用顺时帧!<br>
我们依据相关法律制定了<a href="javascript:void(0);"  @click="yonghu()()">《用户协议》</a>、<a href="javascript:void(0);"  @click="wofang()">《我方隐私声明》</a>、<a href="javascript:void(0);"  @click="wofangm()">《我方免责声明》</a>，请您在点击同意之前仔细阅读并充分理解相关条款，其中的重点条款已为您标注。为了向您提供更好的服务，我们需要获取以下权限和信息，系统将以弹窗提示征求您的授权。<br>
地理位置<br>
经授权，我们会收集您的地理位置信息，以便为您推荐周边的生活服务等。请注意，在部分业务场景下，地理位置是必要信息，拒绝授权可能影响正常使用。<br>
相机<br>
经授权，我们会在您使用扫码、拍照等对应服务时使用您的相机功能。<br>
相册<br>
经授权，我们会在您使用照片及视频上传、保存等对应服务时收集您的相册信息。<br>
设备信息<br>
经授权，我们会收集您的设备信息以保障系统运行和您的账号、交易安全。<br>
我们将通过《我方隐私声明》向您说明:<br>
1、为了您可以更好地享受服务，我们会根据您的授权内容，收集和使用对应的必要信息(例如您的联系电话、位置信息、地址等)。<br>
2、您可以对上述信息进行访问、更正、删除以及注销账号，我们也将提供专门的个人信息保护联系方式。<br>
3、未经您的授权同意，我们不会将您的个人信息共享给第三方或用于您未授权的其他用途。<br>
如果您对以上协议有任何疑问，您可以通过以上协议中披露的联系方式与我们取得联系。如您同意以上协议内容，请点击“同意”并开始使用我们的产品和服务！<br>
顺时帧将一如既往坚守使命，一手全顺好生活!</view></scroll-view>
				<view class="ot" @click="tongyi()"><p>同意</p></view>
			</view>
			<div class="init">
				<image src="../../static/tu/UI.jpg" class="UI">
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
				here : true
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
			},
			tongyi(){
				this.here = false;
			},
			yonghu(){
				uni.navigateTo({
					url:"../yonghuxieyi/yonghuxieyi"
				})
			},
			wofang(){
				uni.navigateTo({
					url:"../wfyssm/wfyssm"
				})
			},
			wofangm(){
				uni.navigateTo({
					url:"../wfmzsm/wfmzsm"
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
	.tan{
		position: absolute;
		left: 100rpx;
		top: 300rpx;
		width: 550rpx;
		height: 500rpx;
		background: #FFFFFF;
		z-index: 100000;
		border-radius: 15rpx;
		border: #333333 solid 1rpx;
		display: flex;
		flex-direction:column;
		justify-content: center;
		align-items: center;
	}
	.sm{
		width: 550rpx;
		height: 400rpx;
	}
	.ot{
		width: 200rpx;
		height: 50rpx;
		background: #4CD964;
	}
	.ot p{
		text-align: center;
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
		margin-top: 120rpx;
	}
	.icon{
		position: relative;
		width: 80%;
		height: 100rpx;
		border-bottom: #2C405A solid 2px;
		
		margin: 0 auto;
	}
	.icon image{
		width: 80rpx;
		height: 80rpx;
		margin-top: 10px;
		margin-left: 10px;
	}
	.icon p{
		display: inline;
		position: absolute;
		font-size: 50rpx;
		font-family: "幼圆";
		top: 40rpx;
	}
	.UI{
		display: block;
		width: 400rpx;
		height: 250rpx;
		margin: 0 auto;
		margin-top: 150rpx;
	}
</style>


