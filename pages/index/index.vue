<template>
	<view class="home">
			<scroll-view scroll-x="true" class="navscroll" >
				<view class="item" :class="item.id==navIndex?'active':''" v-for="(item,index) in navArr" :key="item.id" @click="clickNav(item.id)">{{item.classname}}</view>
			</scroll-view>
		<view class="content">
			<view class="row" v-for="(item,index) in newsArr" :key="item.id" >
					<newsbox @click.native="goDetail(item)" :item="item" />
			</view>
		</view>
		<view class="nodata" v-show="newsArr.length==0">
			<image src="../../static/images/nodata.png" mode="aspectFill"></image>
		</view>
		<view class="loading" v-show="newsArr.length">
			<view v-show="loding==1" >数据加载中...</view>
			<view v-show="loding==2">没有更多了~~</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navIndex:51,
				navArr:[],
				newsArr:[],
				currentPage:1,
				loding:0,
			}
		},
		onLoad() {
			this.getNavData()
			this.getNewsData()
		},
		onReachBottom() {
			if(this.loding == 2){
				return
			}
			this.currentPage++,
			this.loding=1
			this.getNewsData()
			
		},
		methods: {
			clickNav(index){
				this.newsArr = []
				this.loding = 0
				this.currentPage = 1
				this.navIndex = index
				this.getNewsData()
			},
			goDetail(item){
				uni.navigateTo({
					url:`/pages/detail/detail?id=${item.id}&cid=${item.classid}`,
				})
			},
			getNavData(){
				uni.request({
					url:"https://ku.qingnian8.com/dataApi/news/navlist.php",
					success:res => {
						this.navArr = res.data
					}
				})
			},
			getNewsData(){
				uni.request({
					url:"https://ku.qingnian8.com/dataApi/news/newslist.php",
					data:{
						cid:this.navIndex,
						page:this.currentPage
						},
					success: res => {
						if(res.data.length==0) this.loding=2
						this.newsArr = [...this.newsArr,...res.data]
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.navscroll{
	position: fixed;
	left: 0;
	top: var(window-top);
	z-index: 10;
	height: 100rpx;
	background: #F7F8FA;
	white-space: nowrap;
	/deep/ ::-webkit-scrollbar {
		width: 4px !important;
		height: 1px !important;
		overflow: auto !important;
		background: transparent !important;
		-webkit-appearance: auto !important;
		display: block;
		}
	.item{
		display: inline-block;
		font-size: 40rpx;
		line-height: 100rpx;
		padding: 0 30rpx;
		color: #333;
		&.active{
			color: #31c27c;
		}
		
	}
}
.content{
	padding: 30rpx;
	padding-top: 130rpx;
	.row{
		border-bottom: 1px dashed #efefef ;
		padding: 20rpx 0;
	}
}
.loading{
	text-align: center;
	font-size: 26rpx;
	color: #888;
	line-height: 2em;
}
</style>
