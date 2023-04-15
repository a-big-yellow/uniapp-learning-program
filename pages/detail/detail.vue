<template>
	<view class="detail">
		<view class="title">
			<text>{{detail.title}}</text>
		</view>
		<view class="info">
			<view class="author">
				{{detail.author}}
			</view>
			<view class="time">
				{{detail.posttime}}
			</view>
		</view>
		<view class="content">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	import moment from "moment"
	export default {
		data() {
			return {
				options:null,
				detail:[],
			};
		},
		onLoad(e) {
			this.options = e
			this.getDetail()
			// console.log(this.options)
		},
		methods:{
			getDetail(){
				uni.request({
					url:"https://ku.qingnian8.com/dataApi/news/detail.php",
					data:this.options,
					success: res => {
						res.data.posttime= moment(parseInt(res.data.posttime)).format('YYYY-MM-DD')
						res.data.content = res.data.content.replace(/<img/gi,'<img style="max-width:100%"')
						this.detail = res.data
						// this.historyArr.concat()
						this.saveHistory()
						uni.setNavigationBarTitle({
							title:this.detail.title
						})
					}
				})
			},
			saveHistory(){
				let {detail} = this
				detail.looktime = moment().format('YYYY-MM-DD')
				let historyArr = uni.getStorageSync("historyArr") || []
				
				let index = historyArr.findIndex(item=>{
					return item.id == this.detail.id
				})
				if(index>0){
					historyArr.splice(index,1)
				}
				historyArr.unshift(detail)
				uni.setStorageSync("historyArr",historyArr)
				
			}
		}
		
	}
</script>

<style lang="scss">
.detail{
	padding: 30rpx;
	.title{
		font-size: 46rpx;
		color: #333;
	}
	.info{
		background: #f6f6f6;
		padding: 20rpx 10rpx;
		font-size: 22rpx;
		color: #666;
		display: flex;
		justify-content: space-between;
		margin: 40rpx 0;
	}
	.content{
		padding-bottom: 50rpx;
		img{
			max-width: 100%;
		}
	}
}
</style>
