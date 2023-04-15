<template>
	<view class="user"> 
		<view class="top">
			<image src="../../static/logo.png" mode="aspectFill"></image>
			<view class="text">
				<text>历史浏览记录</text>
			</view>
		</view>
		<view class="content" >
			<view class="row"  v-for="item in hisArr"  @click="demo(item)">
				<newsbox :item="item" />
			</view>
		</view>
		<view class="nodata" v-show="hisArr.length==0">
			<image src="../../static/images/nodata.png" mode="aspectFill"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hisArr:[]
			};
		},
		onShow() {
			this.getData()
		},
		methods: {
			demo(item){
				uni.navigateTo({
					url:`/pages/detail/detail?id=${item.id}&cid=${item.classid}`,
					
				})
			},
			getData(){
				this.hisArr = uni.getStorageSync("historyArr") || []
			}
		}
	}
</script>

<style lang="scss" scoped>
.user{
	.top{
		padding: 50rpx 0;
		background: #f8f8f8;
		color: #555;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		image{
			width: 200rpx;
			height: 200rpx;
		}
		.text{
			font-size: 38rpx;
			padding-top: 20rpx;
		}
	}
	.content{
		padding: 30rpx;
		.row{
			border-bottom: 1px dashed #efefef ;
			padding: 20rpx 0;
		}
	}

}
</style>
